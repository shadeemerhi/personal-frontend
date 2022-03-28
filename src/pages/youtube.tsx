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
import ChannelLink from "../components/Youtube/ChannelLink";

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

    if (!videos.length) {
      getAllChannelVideos();
    }
  }, []);

  return (
    <Layout>
      <ChannelLink textSizeClass="xl_text" center />
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
