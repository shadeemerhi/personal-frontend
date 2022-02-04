import { Box } from "@mui/material";
import React from "react";
import { Project } from "../../../generated/graphql";
import Link from 'next/link';

import styles from "./ProjectItem.module.scss";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className={styles.root}>
      <Box mb={1}>
        <span className="underline_text">{project.title}</span>
      </Box>
      <div className={styles.image_container}>
        <img
          src={project.photoURL}
          style={{ height: "auto", width: "300px" }}
        />
        <div className={styles.description_container}>
          <span className="sm_text">{project.description}</span>
          <a href='https://www.google.com'>
            <button className="btn_inverted sm_text">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
