import React, { useState, useEffect } from "react";

import ProjectForm from "../components/Project/ProjectForm";
import ProjectItem from "../components/Project/Item/ProjectItem";
import Layout from "../components/Layout";
import { Box, CircularProgress } from "@mui/material";

import { useProjectsQuery } from "../generated/graphql";
import { withApollo } from "../util/withApollo";
import { Project } from "../types/project";
import { useAuth } from "../hooks/useAuth";
import { NextPage } from "next";

const DEFAULT_PROJECT: Project = {
  title: "",
  description: "",
  photoFile: undefined,
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
  formItem: Project;
};

const Projects: NextPage = () => {
  const { authKey } = useAuth();
  const { data, loading, error } = useProjectsQuery();
  const [showForm, setShowForm] = useState<ProjectFormState>({
    visible: false,
    formItem: DEFAULT_PROJECT,
  });

  if (error) return <div>There was an error sad face</div>;

  return (
    <Layout>
      {showForm.visible ? (
        <ProjectForm
          setShowForm={setShowForm}
          project={showForm.formItem}
          editing={!!showForm.formItem._id}
          authKey={authKey}
        />
      ) : (
        <Box display="flex" flexDirection="column">
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress color="inherit" size={100} />
            </Box>
          ) : (
            <>
              {authKey && (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    className="btn_primary"
                    onClick={() =>
                      setShowForm({
                        visible: true,
                        formItem: DEFAULT_PROJECT,
                      })
                    }
                  >
                    Create Project
                  </button>
                </Box>
              )}
              <br />
              {data?.projects.map((project) => (
                <ProjectItem
                  key={project._id}
                  authKey={authKey}
                  project={project as Project} // should fix type here and use type from 'generated' - adjust backend Project entity
                  setShowForm={setShowForm}
                />
              ))}
            </>
          )}
        </Box>
      )}
    </Layout>
  );
};
export default withApollo({ ssr: true })(Projects);
