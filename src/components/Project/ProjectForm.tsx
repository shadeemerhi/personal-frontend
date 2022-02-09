import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import {
  NewProjectInput,
  UpdateProjectInput,
  useCreateProjectMutation,
  useUpdateProjectMutation,
} from "../../generated/graphql";
import { ProjectFormState } from "../../pages/projects";
import { Project, StackInputItem } from "../../types/project";
import { validateProject } from "../../util/validateProject";
import DateInputs from "./DateInputs";
import GithubLinks from "./GithubLinks";
import ImageUpload from "./ImageUpload";
import InputField from "./InputField";
import styles from "./ProjectForm.module.scss";
import Stack from "./Stack";

type ProjectFormProps = {
  editing?: boolean;
  setShowForm: (value: any) => void; // tried using ProjectFormState as type here but not working?
  project: Project;
  authKey: string;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  editing,
  project,
  setShowForm,
  authKey,
}) => {
  const [currentProject, setCurrentProject] = useState<Project>(project);
  const [incompleteProject, setIncompleteProject] = useState(false);

  const [
    createProject,
    {
      data: createProjectData,
      loading: createProjectLoading,
      error: createProjectError,
    },
  ] = useCreateProjectMutation();
  const [
    updateProject,
    {
      data: updateProjectData,
      loading: updateProjectLoading,
      error: updateProjectError,
    },
  ] = useUpdateProjectMutation();

  const onSubmit = async () => {
    editing ? onUpdateProject() : onCreateProject();
  };

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
        input: newProject as NewProjectInput,
        adminKey: authKey,
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

  const onUpdateProject = async () => {
    const newProject = { ...currentProject };
    delete newProject.__typename;
    try {
      const { data } = await updateProject({
        variables: {
          input: newProject as UpdateProjectInput,
          adminKey: authKey,
        },
      });
    } catch (error) {
      console.log("updateProject error", error);
    }
  };

  const handleChange = (
    field: string,
    value: string | boolean | Date | null | undefined
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
      <Box className={`${styles.outer_form_container} custom_form`} mb={10}>
        <h3 className="heavy_text">
          {editing ? "Update Project" : "Create New Project"}
        </h3>
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
          <ImageUpload
            photoFile={currentProject.photoFile}
            photoURL={currentProject.photoURL}
            stateUpdateFunction={setCurrentProject}
            title='Project Image'
          />
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
          <Stack
            stack={currentProject.stack}
            handleChange={handleStackChange}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={styles.submit_container}
          >
            {createProjectData && (
              <Box mb={2}>
                <p className="mg_0 md_text">
                  {createProjectData.createProject.title} successfully created!{" "}
                  <span
                    className="md_text heavy_text pointer"
                    onClick={() =>
                      setShowForm((prev: ProjectFormState) => ({
                        ...prev,
                        visible: false,
                      }))
                    }
                  >
                    View
                  </span>
                </p>
              </Box>
            )}
            {updateProjectData && (
              <Box mb={2}>
                <p className="mg_0 md_text">
                  {updateProjectData.updateProject.title} successfully updated!{" "}
                  <span
                    className="md_text heavy_text pointer"
                    onClick={() =>
                      setShowForm((prev: ProjectFormState) => ({
                        ...prev,
                        visible: false,
                      }))
                    }
                  >
                    View
                  </span>
                </p>
              </Box>
            )}
            <button
              className="btn_primary submit_button"
              onClick={onSubmit}
            >
              {createProjectLoading || updateProjectLoading ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                `${editing ? "Update Project" : "Submit Project"}`
              )}
            </button>
          </Box>
          {(createProjectError || updateProjectError || incompleteProject) && (
            <Box mb={2} mt={2}>
              <Alert severity="error">
                {incompleteProject
                  ? "One or more of the required fields is missing"
                  : "Error creating/updating project"}
              </Alert>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default ProjectForm;
