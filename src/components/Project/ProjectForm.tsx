import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import InputField from "./InputField";
import { Project, StackInputItem } from "../../types/project";
import { withApollo } from "../../util/withApollo";

import DateInputs from "./DateInputs";
import GithubLinks from "./GithubLinks";
import Stack from "./Stack";
import ImageUpload from "./ImageUpload";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import styles from "./ProjectForm.module.scss";
import { useCreateProjectMutation } from "../../generated/graphql";

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
  const [photoFile, setPhotoFile] = useState<File>();
  const [incompleteProject, setIncompleteProject] = useState(false);

  const [createProject, { data, loading, error }] = useCreateProjectMutation();

  const onCreateProject = async () => {
    if (!canSubmitProject()) {
      setIncompleteProject(true);
      return;
    }
    try {
      if (incompleteProject) setIncompleteProject(false);
      const { data, errors } = await createProject({
        variables: {
          input: {
            title: project.title,
            description: "here is desc",
            photoFile,
            startDate: project.startDate,
            endDate: project.endDate,
            inProgress: project.inProgress,
            stack: project.stack, // not type safe - unsure how to do this as of now
          },
        },
      });
      console.log("HERE IS RESPONSE", data, errors);
    } catch (error) {
      console.log("creatProject error", error);
    }
  };

  const canSubmitProject = () => {
    const {
      title,
      description,
      startDate,
      endDate,
      inProgress,
      repositoryLinks,
      stack: { frontend, backend, other },
    } = project;

    return (
      !!title &&
      !!description &&
      !!startDate &&
      (inProgress || endDate) &&
      !!repositoryLinks.length &&
      !!frontend.length &&
      !!backend.length
    );
  };

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
    console.log("HERE IS SUBMIT", stackItem);

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
        <Box display="flex" flexDirection="column">
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
          <ImageUpload photoFile={photoFile} setPhotoFile={setPhotoFile} />
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
          {(error || incompleteProject) && (
            <Box mb={2}>
              <Alert severity="error">
                {incompleteProject
                  ? "One or more of the required fields is missing"
                  : "Error creating project"}
              </Alert>
            </Box>
          )}
          <button className="btn_primary" onClick={onCreateProject}>
            Add Project
          </button>
        </Box>
      </Box>
    </>
  );
};
export default ProjectForm;
