import React from "react";

import { Alert, Box } from "@mui/material";
import { ProjectFormState } from "../../../pages/projects";
import { Project } from "../../../types/project";

import StackItem from "../Stack/StackItem";
import AdminIcons from "./AdminIcons";

import styles from "./ProjectItem.module.scss";
import { getProjectDateString } from "../../../util/formatDates";

type ProjectItemContentProps = {
  project: Project;
  authKey: string;
  onDelete?: () => void;
  setShowForm?: (value: ProjectFormState) => void;
  error?: any;
  loading?: boolean;
};

const ProjectItemContent: React.FC<ProjectItemContentProps> = ({
  project,
  authKey,
  onDelete,
  setShowForm,
  error,
  loading,
}) => {
  return (
    <div className={styles.root}>
      {error && (
        <Box mb={2} mt={2} width="100%">
          <Alert severity="error">Error deleting project</Alert>
        </Box>
      )}
      <div className={styles.content_container}>
        <div className={styles.title_container}>
          <div className={styles.text_container}>
            <span className={`${styles.title_text} underline_text`}>
              {project.title}
            </span>
            <span className="sm_text medium_text grey_text">
              {getProjectDateString(project.startDate, project.endDate)}
            </span>
          </div>
          {authKey && setShowForm && (
            <AdminIcons
              setShowForm={setShowForm}
              onDelete={onDelete!}
              project={project}
              loading={loading!}
            />
          )}
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
export default ProjectItemContent;
