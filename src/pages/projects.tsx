import React, { useState } from "react";
import { Box } from "@mui/material";

import ProjectForm from "../components/Project/ProjectForm";
import ProjectItem from "../components/Project/Item/ProjectItem";

import { useProjectsQuery } from "../generated/graphql";
import { withApollo } from "../util/withApollo";
import { Project } from "../types/project";

const DEFAULT_PROJECT: Project = {
  title: "",
  description: "",
  photoURL: "",
  startDate: new Date(),
  endDate: new Date(),
  inProgress: false,
  repositoryLinks: [],
  stack: {
    frontend: [],
    backend: [],
    other: [],
  },
};

export type ProjectFormState = {
  visible: boolean;
  project: any;
};

const Projects: React.FC = () => {
  const { data, loading, error } = useProjectsQuery();
  const [showForm, setShowForm] = useState<ProjectFormState>({
    visible: false,
    project: DEFAULT_PROJECT,
  });

  if (error) return <div>There was an error sad face</div>;

  return (
    <>
      {showForm.visible ? (
        <ProjectForm setShowForm={setShowForm} project={showForm.project} />
      ) : (
        <Box display="flex" flexDirection="column">
          <p>IMAGE HEADER WILL BE HERE</p>
          <p>Projects Page</p>
          <Box>
            <button
              className="btn_primary"
              onClick={() =>
                setShowForm({
                  ...showForm,
                  visible: true,
                })
              }
            >
              Create Project
            </button>
          </Box>
          <br />
          {data?.projects.map((project) => (
            <ProjectItem key={project._id} project={project} setShowForm={setShowForm} />
          ))}
        </Box>
      )}
    </>
  );
};
export default withApollo({ ssr: true })(Projects);
