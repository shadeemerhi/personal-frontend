import React from "react";
// import { Project } from "../../../types/project";
import { Project } from "../../../generated/graphql";
 
type ProjectItemProps = {
  project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <>
      {project.title}
      <img src={project.photoURL} style={{ height: "auto", width: "300px" }} />
    </>
  );
};
export default ProjectItem;
