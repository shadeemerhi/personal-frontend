import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import styles from "../../styles/Youtube.module.scss";

type VideoElemProps = {
  video: {
    snippet: {
      resourceId: {
        videoId: string;
      };
      title: string;
    };
  };
};

const VideoElem: React.FC<VideoElemProps> = ({ video }) => {
  return (
    <div className={styles.video_item_container}>
      <span className="md_text">{video.snippet.title}</span>
      <div className={styles.video}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
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
    </div>
  );
};
export default VideoElem;
