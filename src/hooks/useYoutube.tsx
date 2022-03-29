import React, { useState, useEffect, useContext, useRef } from "react";
import axios, { Axios, AxiosInstance } from "axios";

type useYoutubeProps = {};

interface YoutubeContextInterface {
  youtubeRef: React.MutableRefObject<AxiosInstance | undefined> | null;
  videos: any[];
  latestRelease: any;
  getAllChannelVideos: any;
  getLatestRelease: any;
  createYoutubeInstance: any;
  loading: boolean;
  error: string;
}

const YoutubeContext = React.createContext<YoutubeContextInterface>({
  youtubeRef: null,
  videos: [],
  latestRelease: null,
  getAllChannelVideos: null,
  getLatestRelease: null,
  createYoutubeInstance: null,
  loading: false,
  error: "",
});

export const useYoutube = () => {
  return useContext(YoutubeContext);
};

const YoutubeProvider: React.FC<useYoutubeProps> = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [latestRelease, setLatestRelease] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const youtubeRef = useRef<AxiosInstance>();

  const createYoutubeInstance = () => {
    const youtube = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        maxResults: 10,
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        part: "snippet",
      },
    });
    youtubeRef.current = youtube;
  };

  const getAllChannelVideos = async () => {
    if (!youtubeRef.current) return;
    setLoading(true);
    try {
      const uploadedItems = await youtubeRef.current.get("/playlistItems", {
        params: {
          playlistId: process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID,
        },
      });

      if (uploadedItems.data.items) {
        setVideos(uploadedItems.data.items);
      }
      console.log("HERE IS UPLOAD ITEMS", uploadedItems);
    } catch (error: any) {
      console.log("Error fetching channel data", error.message);
      setError("Error fetching videos");
    }
    setLoading(false);
  };

  const getLatestRelease = async () => {
    if (!youtubeRef.current) return;
    try {
      const latestReleaseResults = await youtubeRef.current.get(
        "/playlistItems",
        {
          params: {
            maxResults: 1,
            playlistId: process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID,
          },
        }
      );

      if (latestReleaseResults.data.items.length) {
        const latestRelease = latestReleaseResults.data.items[0];
        setLatestRelease(latestRelease);
      }
      console.log("THIS SHOULD HAVE ONE ITEM", latestReleaseResults);
    } catch (error: any) {
      console.log("Error fetching latest release", error.message);
      setError("Error fetching latest release");
    }
  };

  const value = {
    youtubeRef,
    videos,
    latestRelease,
    getAllChannelVideos,
    getLatestRelease,
    createYoutubeInstance,
    loading,
    error,
  };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export default YoutubeProvider;
