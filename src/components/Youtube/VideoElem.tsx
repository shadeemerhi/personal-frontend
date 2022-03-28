import React from "react";
import ReactPlayer from "react-player";
import styles from "../../styles/Youtube.module.scss";

type VideoElemProps = {
  video: {
    contentDetails: {
      videoId: string;
    };
  };
};

const VideoElem: React.FC<VideoElemProps> = ({ video }) => {
  return (
    <div className={styles.video}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
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
  );
};
export default VideoElem;
