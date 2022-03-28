import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "../../styles/Youtube.module.scss";
import classNames from "classnames";

type ChannelLinkProps = {
  textSizeClass: string;
  center?: boolean;
};

const ChannelLink: React.FC<ChannelLinkProps> = ({ textSizeClass, center }) => {
  return (
    <div
      className={classNames({
        [styles.youtube_text_container]: true,
        [styles.center]: center,
      })}
    >
      <span className={`${textSizeClass} heavy_text`}>Find me on </span>{" "}
      <a
        href="https://www.youtube.com/channel/UCxwvyK3-Xs4zvoGWFT_iDmw"
        target="_blank"
        rel="noreferrer"
      >
        <YouTubeIcon className={styles.icon} />
        <span className={`pointer ${textSizeClass}`}>Youtube</span>
      </a>
    </div>
  );
};
export default ChannelLink;
