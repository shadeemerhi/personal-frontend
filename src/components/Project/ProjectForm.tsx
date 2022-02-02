import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import InputField from "./InputField";
import { Project, StackInputItem } from "../../types/project";

import DateInputs from "./DateInputs";
import GithubLinks from "./GithubLinks";
import Stack from "./Stack";
import ImageUpload from "./ImageUpload";

import styles from "./ProjectForm.module.scss";

type ProjectFormProps = {
  setShowForm: (value: boolean) => void;
};

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

const ProjectForm: React.FC<ProjectFormProps> = ({ setShowForm }) => {
  const [project, setProject] = useState<Project>(DEFAULT_PROJECT);

  const handleChange = (
    field: string,
    value: string | boolean | Date | null
  ) => {
    setProject((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRepoChange = (link: string, adding?: boolean) => {
    const updatedLinks = adding
      ? [...project.repositoryLinks, link]
      : project.repositoryLinks.filter((l) => l !== link);
    setProject((prev) => ({
      ...prev,
      repositoryLinks: updatedLinks,
    }));
  };

  const handleStackChange = (stackItem: StackInputItem, adding?: boolean) => {
      console.log('HERE IS SUBMIT', stackItem);
      
    const updatedStackList = adding
      ? [...project.stack[stackItem.category], stackItem.name]
      : project.stack[stackItem.category].filter(
          (itemName) => itemName !== stackItem.name
        );
    setProject((prev) => ({
      ...prev,
      stack: {
        ...project.stack,
        [stackItem.category]: updatedStackList,
      },
    }));
  };

  return (
    <>
      <ArrowBackIcon className="pointer" onClick={() => setShowForm(false)} />
      <Box className={styles.outer_form_container}>
        <h3 className="heavy_text">Create New Project</h3>
        <Box display='flex' flexDirection='column'>
          <Box
            className={styles.input_container}
            display="flex"
            flexDirection="column"
          >
            <InputField
              name="title"
              handleChange={handleChange}
              label="Project title"
              placeholder="Title"
            />
          </Box>
          <Box
            className={styles.input_container}
            display="flex"
            flexDirection="column"
          >
            <InputField
              name="description"
              handleChange={handleChange}
              label="Project description"
              placeholder="Description"
              textarea
            />
          </Box>
          <ImageUpload />
          <DateInputs
            startDate={project.startDate}
            endDate={project.endDate}
            inProgress={project.inProgress}
            handleChange={handleChange}
          />
          <GithubLinks
            repositoryLinks={project.repositoryLinks}
            handleChange={handleRepoChange}
          />
          <Stack stack={project.stack} handleChange={handleStackChange} />
          <br />
          <button type="submit" className="btn_primary">
            Add Project
          </button>
        </Box>
      </Box>
    </>
  );
};
export default ProjectForm;
