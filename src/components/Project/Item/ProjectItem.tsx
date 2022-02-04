import { Box } from "@mui/material";
import React from "react";
import { Project } from "../../../generated/graphql";

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
        <span className="sm_text">pefjewpfjwepfwejpweojwpoejwpoe pqefjwepof jwepoo efpowej fpowejf wepfjwe pfweojf pweojf wpefj poj</span>
      </div>
    </div>
  );
};
export default ProjectItem;
