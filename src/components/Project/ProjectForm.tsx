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
import { ProjectFormState } from "../../pages/projects";

type ProjectFormProps = {
  // setShowForm: (value: boolean) => void;
  project: Project;
  setShowForm: any;
};

const ProjectForm: React.FC<ProjectFormProps> = ({ project, setShowForm }) => {
  const [currentProject, setCurrentProject] = useState<Project>(project);
  const [photoFile, setPhotoFile] = useState<File>();
  const [incompleteProject, setIncompleteProject] = useState(false);

  const [createProject, { data, loading, error }] = useCreateProjectMutation();

  const onCreateProject = async () => {
    if (!validateProject(currentProject)) {
      setIncompleteProject(true);
      return;
    }

    if (incompleteProject) setIncompleteProject(false);
    const newProject = { ...currentProject };
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
    setCurrentProject((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRepoChange = (link: string, adding?: boolean) => {
    const updatedLinks = adding
      ? [...currentProject.repositoryLinks, link]
      : currentProject.repositoryLinks.filter((l) => l !== link);
    setCurrentProject((prev) => ({
      ...prev,
      repositoryLinks: updatedLinks,
    }));
  };

  const handleStackChange = (stackItem: StackInputItem, adding?: boolean) => {
    const updatedStackList = adding
      ? [...currentProject.stack[stackItem.category], stackItem.name]
      : currentProject.stack[stackItem.category].filter(
          (itemName) => itemName !== stackItem.name
        );
    setCurrentProject((prev) => ({
      ...prev,
      stack: {
        ...currentProject.stack,
        [stackItem.category]: updatedStackList,
      },
    }));
  };

  return (
    <>
      <ArrowBackIcon
        className="pointer"
        onClick={() =>
          setShowForm((prev: ProjectFormState) => ({
            ...prev,
            visible: false,
          }))
        }
      />
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
              value={currentProject.title}
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
              value={currentProject.description}
              textarea
            />
          </Box>
          <ImageUpload photoFile={photoFile} setPhotoFile={setPhotoFile} />
          <DateInputs
            startDate={currentProject.startDate}
            endDate={currentProject.endDate}
            inProgress={currentProject.inProgress}
            handleChange={handleChange}
          />
          <GithubLinks
            repositoryLinks={currentProject.repositoryLinks}
            handleChange={handleRepoChange}
          />
          <Stack stack={currentProject.stack} handleChange={handleStackChange} />
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
