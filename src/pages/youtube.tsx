import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Alert, Box, CircularProgress, Stack } from "@mui/material";
import axios from "axios";
import ReactPlayer from "react-player";
import Layout from "../components/Layout";
import styles from "../styles/Channel.module.scss";
import { withApollo } from "../util/withApollo";

const Youtube: React.FC<{}> = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const createYoutubeInstance = async () => {
      setLoading(true);
      try {
        const youtube = axios.create({
          baseURL: "https://www.googleapis.com/youtube/v3",
          params: {
            maxResults: 5,
            key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
          },
        });

        const channelStuff = await youtube.get("/channels", {
          params: {
            id: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID,
            part: "contentDetails",
          },
        });

        const playlistId =
          channelStuff.data.items[0].contentDetails.relatedPlaylists.uploads;

        const uploadedItems = await youtube.get("/playlistItems", {
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

    createYoutubeInstance();
  }, []);

  return (
    <Layout>
      <div className={styles.youtube_text_container}>
        <span className="xl_text">Find me on </span>{" "}
        <a
          href="https://www.youtube.com/channel/UCxwvyK3-Xs4zvoGWFT_iDmw"
          target="_blank"
        >
          <YouTubeIcon className={styles.icon} />
          <span className="xl_text pointer heavy_text">Youtube</span>
        </a>
      </div>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress color="inherit" size={100} />
        </Box>
      ) : (
        <Stack spacing={8} display="flex" alignItems="center" mb={10}>
          {videos.map((item: any, index) => (
            <div className={styles.video} key={index}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
                controls
                height="100%"
                width="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            </div>
          ))}
        </Stack>
      )}
      {error && (
        <Box mb={2} mt={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
    </Layout>
  );
};
export default withApollo({ ssr: true })(Youtube);
