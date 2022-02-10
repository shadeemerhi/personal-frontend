import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Alert, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./ProjectItem.module.scss";
import StackItem from "../Stack/StackItem";
import { ProjectFormState } from "../../../pages/projects";
import { Project } from "../../../types/project";
import { useDeleteProjectMutation } from "../../../generated/graphql";

type ProjectItemProps = {
  authKey: string;
  setShowForm?: (value: ProjectFormState) => void;
  project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  authKey,
  project,
  setShowForm,
}) => {
  const [deleteProject, { data, loading, error }] = useDeleteProjectMutation();

  const onDelete = async () => {
    try {
      await deleteProject({
        variables: {
          _id: project._id as string,
          adminKey: authKey,
        },
        update: (cache) => {
          cache.evict({ id: `Project:${project._id}` });
        },
      });
    } catch (error) {
      console.log("onDelete error");
    }
  };

  const formatStringDate = (input: Date) => {
    const date = new Date(input);
    const month = date.toLocaleString("default", { month: "long" }).slice(0, 3);
    const year = date.getFullYear();
    return `${month}, ${year}`;
  };

  const getProjectDateString = (startDate: Date, endDate?: Date) => {
    return `${formatStringDate(project.startDate)} - ${
      endDate ? formatStringDate(project.endDate as Date) : "In Progress"
    }`;
  };

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
            <span className="sm_text medium_text disabled_text">
              {getProjectDateString(project.startDate, project.endDate)}
            </span>
          </div>
          {authKey && (
            <div className={styles.icon_container}>
              <EditIcon
                className="pointer"
                onClick={() =>
                  setShowForm({
                    visible: true,
                    project,
                  })
                }
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml={1}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <DeleteOutlineIcon className="pointer" onClick={onDelete} />
                )}
              </Box>
            </div>
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
export default ProjectItem;
