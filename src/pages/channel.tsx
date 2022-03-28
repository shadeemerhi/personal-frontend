import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { withApollo } from "../util/withApollo";
import ReactPlayer from "react-player";
import { Box, Stack } from "@mui/material";
import axios from "axios";

const API_KEY = "AIzaSyA82pxHs-jGVrl_p0-SUxLGJIh4xgejj7E";

const Channel: React.FC<{}> = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const createYoutubeInstance = async () => {
      try {
        const youtube = axios.create({
          baseURL: "https://www.googleapis.com/youtube/v3",
          params: {
            // part: "snippet",
            maxResults: 5,
            key: API_KEY,
          },
        });

        const channelStuff = await youtube.get("/channels", {
          params: {
            id: "UCxwvyK3-Xs4zvoGWFT_iDmw",
            part: "contentDetails",
          },
        });

        const playlistId =
          channelStuff.data.items[0].contentDetails.relatedPlaylists.uploads;

        console.log("HERE IS UPLOADS PLAYLIST ID", playlistId);

        const uploadStuff = await youtube.get("/playlistItems", {
          params: {
            part: "contentDetails",
            playlistId,
          },
        });

        if (uploadStuff.data.items) {
          setVideos(uploadStuff.data.items);
        }
        console.log("HERE IS UPLOAD STUFF", uploadStuff);
      } catch (error: any) {
        console.log("Error fetching channel data", error.message);
      }
    };

    createYoutubeInstance();
  }, []);

  return (
    <Layout>
      <Stack spacing={8} alignItems="center" mb={10}>
        {videos.map((item: any) => (
          <ReactPlayer
            // url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            url={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
            controls
            // height="246px"
            // width="100%"
            // width="640px"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        ))}
      </Stack>
    </Layout>
  );
};
export default withApollo({ ssr: true })(Channel);
