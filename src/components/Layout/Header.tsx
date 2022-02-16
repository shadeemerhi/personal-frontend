import React, { useEffect } from "react";
import { useUserQuery } from "../../generated/graphql";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../../styles/Header.module.scss";
import { Link } from "@mui/material";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { data, error } = useUserQuery({
    variables: {
      _id: "421f6412-edf9-4ef8-b131-8e957901ce2a",
    },
  });

  if (error) return null;

  return (
    <div className={styles.root}>
      <img src={data?.user.user?.photoURL} />
      <div className={styles.text_icon_container}>
        <div className={styles.title_container}>
          <CheckCircleIcon sx={{ marginRight: "6px", color: "#1982FC" }} />
          <span className="sm_text">{data?.user.user?.title}</span>
        </div>
        <span className={`${styles.name} heavy_text`}>Shadee Merhi</span>
        <div className={styles.icon_container}>
          <a
            target="_blank"
            rel="noreferrer"
            href={data?.user.user?.githubLink}
            className={styles.icon_item}
          >
            <span className="xs_text">GITHUB</span>
            <GitHubIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={data?.user.user?.linkedInLink}
            className={styles.icon_item}
          >
            <span className="xs_text">LINKEDIN</span>
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`mailto: ${data?.user.user?.email}`}
            className={styles.icon_item}
          >
            <span className="xs_text">EMAIL</span>
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
