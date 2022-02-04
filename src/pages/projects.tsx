import React, { useState } from "react";
import { Box } from "@mui/material";

import ProjectForm from "../components/Project/ProjectForm";
import ProjectItem from "../components/Project/Item/ProjectItem";

import { useProjectsQuery } from "../generated/graphql";
import { withApollo } from "../util/withApollo";

interface ProjectPageProps {}

const Projects: React.FC<ProjectPageProps> = () => {
  const { data, loading, error } = useProjectsQuery();
  console.log("HERE IS DATA", loading, data, error);
  const [showForm, setShowForm] = useState(false);

  if (error) return <div>There was an error sad face</div>;

  return (
    <>
      {showForm ? (
        <ProjectForm setShowForm={setShowForm} />
      ) : (
        <Box display="flex" flexDirection="column">
          <p>IMAGE HEADER WILL BE HERE</p>
          <p>Projects Page</p>
          <Box>
            <button className="btn_primary" onClick={() => setShowForm(true)}>
              Create Project
            </button>
          </Box>
          <br />
          {data?.projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </Box>
      )}
    </>
  );
};
export default withApollo({ ssr: true })(Projects);
