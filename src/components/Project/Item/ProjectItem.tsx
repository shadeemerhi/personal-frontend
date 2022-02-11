import React from "react";

import { Alert, Box } from "@mui/material";

import StackItem from "../Stack/StackItem";
import AdminIcons from "./AdminIcons";
import ProjectItemContent from "./ProjectItemContent";

import { ProjectFormState } from "../../../pages/projects";
import { Project } from "../../../types/project";
import { useDeleteProjectMutation } from "../../../generated/graphql";
import { getProjectDateString } from "../../../util/formatDates";

import styles from "./ProjectItem.module.scss";

type ProjectItemProps = {
  authKey: string;
  project: Project;
  setShowForm?: (value: ProjectFormState) => void;
};

const ProjectItemWrapper: React.FC<ProjectItemProps> = ({
  authKey,
  project,
  setShowForm,
}) => {
  const [deleteProject, { loading, error }] = useDeleteProjectMutation();

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

  return (
    <ProjectItemContent
      project={project}
      authKey={authKey}
      setShowForm={setShowForm}
      onDelete={onDelete}
      error={error}
      loading={loading}
    />
  );
};
export default ProjectItemWrapper;
