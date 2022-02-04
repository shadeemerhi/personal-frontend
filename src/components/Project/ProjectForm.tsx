import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import InputField from "./InputField";
import DateInputs from "./DateInputs";
import GithubLinks from "./GithubLinks";
import Stack from "./Stack";
import ImageUpload from "./ImageUpload";

import { Project, StackInputItem } from "../../types/project";
import { useCreateProjectMutation } from "../../generated/graphql";
import { validateProject } from "../../util/validateProject";

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
  const [photoFile, setPhotoFile] = useState<File>();
  const [incompleteProject, setIncompleteProject] = useState(false);

  const [createProject, { data, loading, error }] = useCreateProjectMutation();

  const onCreateProject = async () => {
    if (!validateProject(project)) {
      setIncompleteProject(true);
      return;
    }

    if (incompleteProject) setIncompleteProject(false);
    const newProject = { ...project };
    delete newProject.photoURL;
    await createProject({
      variables: {
        input: {
          ...newProject,
          photoFile,
        },
      },
      update: (cache) => {
        cache.evict({ fieldName: "projects" });
      },
    });
    try {
    } catch (error) {
      console.log("createProject error", error);
    }
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
      <Box className={styles.outer_form_container} mb={10}>
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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={styles.submit_container}
          >
            {data && (
              <Box mb={2}>
                <p className="mg_0 md_text">
                  {data.createProject.title} successfully created!{" "}
                  <span
                    className="md_text heavy_text pointer"
                    onClick={() => setShowForm(false)}
                  >
                    View
                  </span>
                </p>
              </Box>
            )}
            <button
              className="btn_primary"
              onClick={onCreateProject}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {loading ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                "Submit Project"
              )}
            </button>
          </Box>
          {(error || incompleteProject) && (
            <Box mb={2} mt={2}>
              <Alert severity="error">
                {incompleteProject
                  ? "One or more of the required fields is missing"
                  : "Error creating project"}
              </Alert>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default ProjectForm;
