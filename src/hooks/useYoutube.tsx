import React, { useState, useEffect, useContext, useRef } from "react";
import axios, { Axios, AxiosInstance } from "axios";

type useYoutubeProps = {};

interface YoutubeContextInterface {
  youtubeRef: React.MutableRefObject<AxiosInstance | undefined> | null;
  videos: any[];
  latestRelease: any;
  getAllChannelVideos: any;
  createYoutubeInstance: any;
  loading: boolean;
  error: string;
}

const YoutubeContext = React.createContext<YoutubeContextInterface>({
  youtubeRef: null,
  videos: [],
  latestRelease: {},
  getAllChannelVideos: null,
  createYoutubeInstance: null,
  loading: false,
  error: "",
});

export const useYoutube = () => {
  return useContext(YoutubeContext);
};

const YoutubeProvider: React.FC<useYoutubeProps> = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [latestRelease, setLatestRelease] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const youtubeRef = useRef<AxiosInstance>();

  const createYoutubeInstance = () => {
    const youtube = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        maxResults: 10,
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      },
    });
    youtubeRef.current = youtube;
  };

  const getAllChannelVideos = async () => {
    if (!youtubeRef.current) return;
    setLoading(true);
    try {
      const channelStuff = await youtubeRef.current.get("/channels", {
        params: {
          id: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID,
          part: "contentDetails",
        },
      });

      const playlistId =
        channelStuff.data.items[0].contentDetails.relatedPlaylists.uploads;

      const uploadedItems = await youtubeRef.current.get("/playlistItems", {
        params: {
          part: "contentDetails",
          playlistId,
        },
      });

      if (uploadedItems.data.items) {
        setVideos(uploadedItems.data.items);
      }
      console.log("HERE IS UPLOAD STUFF", uploadedItems);
    } catch (error: any) {
      console.log("Error fetching channel data", error.message);
      setError("Error fetching videos");
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log("THIS IS RUNNING HAHA");

    // createYoutubeInstance();
  }, []);

  const value = {
    youtubeRef,
    videos,
    latestRelease,
    getAllChannelVideos,
    createYoutubeInstance,
    loading,
    error,
  };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export default YoutubeProvider;
