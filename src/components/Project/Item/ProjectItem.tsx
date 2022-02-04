import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Project } from "../../../generated/graphql";
import Link from "next/link";

import styles from "./ProjectItem.module.scss";
import StackItem from "../Stack/StackItem";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content_container}>
        <Box mb={1}></Box>
        <div className={styles.title_container}>
          <span className="underline_text">{project.title}</span>
        </div>
        <div className={styles.upper_content}>
          <div className={styles.image_container}>
            <img src={project.photoURL} />
          </div>
          <div className={styles.description_container}>
            <span className="">{project.description}</span>
            <a href={project.repositoryLinks[0]}>
              <button className="btn_inverted sm_text">Source Code</button>
            </a>
          </div>
        </div>
        <div className={styles.stack_container}>
          <span className="sm_text medium_text">Stack</span>
          <div className={`${styles.stack_items} border_radius`}>
            <div className={styles.section_container}>
              <span
                className={`underline_text heavy_text ${styles.title_text}`}
              >
                Front:
              </span>
              {project.stack.frontend.map((item: string) => (
                <StackItem
                  name={item}
                  category="Frontend"
                  borderColor="white"
                />
              ))}
            </div>
            <div className={styles.section_container}>
              <span
                className={`underline_text heavy_text ${styles.title_text}`}
              >
                Back:
              </span>
              {project.stack.backend.map((item: string) => (
                <StackItem
                  name={item}
                  category="Frontend"
                  borderColor="white"
                />
              ))}
            </div>
            {project.stack.other.length !== 0 && (
              <div className={styles.section_container}>
                <span
                  className={`underline_text heavy_text ${styles.title_text}`}
                >
                  Other:
                </span>
                {project.stack.other.map((item: string) => (
                  <StackItem
                    name={item}
                    category="Frontend"
                    borderColor="white"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
