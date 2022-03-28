import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Alert, Box, CircularProgress, Stack } from "@mui/material";
import axios from "axios";
import ReactPlayer from "react-player";
import Layout from "../components/Layout";
import styles from "../styles/Youtube.module.scss";
import { withApollo } from "../util/withApollo";
import VideoElem from "../components/Youtube/VideoElem";
import { useYoutube } from "../hooks/useYoutube";

const Youtube: React.FC = () => {
  const {
    videos,
    youtubeRef,
    createYoutubeInstance,
    getAllChannelVideos,
    loading,
    error,
  } = useYoutube();

  useEffect(() => {
    if (!youtubeRef?.current) createYoutubeInstance();
    getAllChannelVideos();
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
          {videos.map((video: any, index) => (
            <VideoElem key={index} video={video} />
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
