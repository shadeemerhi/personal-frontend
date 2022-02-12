import React, { useState } from "react";
import { WorkFormState } from ".";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert, Box, CircularProgress } from "@mui/material";
import InputField from "../../Project/InputField";

import DateInputs from "../../Project/DateInputs";
import Description from "./Description";

import styles from "../../Project/ProjectForm.module.scss";
import {
  useCreateWorkItemMutation,
  WorkItem,
} from "../../../generated/graphql";
import { validateWorkItem } from "../../../util/validateSubmissions";

type FormProps = {
  setShowForm: (value: any) => void;
  workItem: WorkItem;
};

const WorkItemForm: React.FC<FormProps> = ({ workItem, setShowForm }) => {
  const [currentItem, setCurrentItem] = useState(workItem);
  const [incompleteItem, setIncompleteItem] = useState(false);
  const [
    createWorkItem,
    {
      data: createWorkItemData,
      loading: createWorkItemLoading,
      error: createWorkItemError,
    },
  ] = useCreateWorkItemMutation();

  const handleChange = (
    field: string,
    value: string | boolean | Date | null | undefined
  ) => {
    setCurrentItem((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDescriptionChange = (item: string, adding?: boolean) => {
    const updatedDescription = adding
      ? [...currentItem.description, item]
      : currentItem.description.filter((l) => l !== item);
    setCurrentItem((prev) => ({
      ...prev,
      description: updatedDescription,
    }));
  };

  const onSubmit = async () => {
    if (!validateWorkItem(currentItem)) {
      setIncompleteItem(true);
      return;
    }
    if (incompleteItem) setIncompleteItem(false);

    try {
      const { data, errors } = await createWorkItem({
        variables: {
          input: currentItem,
          adminKey: "shadman",
        },
        update: (cache) => {
          cache.evict({ fieldName: "workItems" });
        },
      });
      console.log("HERE IS RESPONSE", data, errors);
    } catch (error) {
      console.log("createWorkItem error", error);
    }
  };

  return (
    <>
      <ArrowBackIcon
        className="pointer"
        onClick={() =>
          setShowForm((prev: WorkFormState) => ({
            ...prev,
            visible: false,
          }))
        }
      />
      <Box className={`${styles.outer_form_container} custom_form`} mb={10}>
        <h3 className="heavy_text">
          {false ? "Update Project" : "Create New Work Item"}
        </h3>
        <Box>
          <Box
            className={styles.input_container}
            display="flex"
            flexDirection="column"
          >
            <InputField
              name="companyName"
              handleChange={handleChange}
              label="Company Name"
              placeholder="Company Name"
              value={currentItem.companyName}
            />
          </Box>
          <Box
            className={styles.input_container}
            display="flex"
            flexDirection="column"
          >
            <InputField
              name="title"
              handleChange={handleChange}
              label="Title"
              placeholder="Title"
              value={currentItem.title}
            />
          </Box>
          <DateInputs
            startDate={currentItem.startDate}
            endDate={currentItem.endDate}
            inProgress={currentItem.inProgress}
            handleChange={handleChange}
          />
          <Box
            className={styles.input_container}
            display="flex"
            flexDirection="column"
          >
            <InputField
              name="location"
              handleChange={handleChange}
              label="Location"
              placeholder="Location"
              value={currentItem.location}
            />
          </Box>
          <Description
            description={currentItem.description}
            handleChange={handleDescriptionChange}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={styles.submit_container}
        >
          <button className="btn_primary submit_button" onClick={onSubmit}>
            {createWorkItemLoading ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              "Create Item"
            )}
          </button>
        </Box>
        {(createWorkItemError || incompleteItem) && (
          <Box mb={2} mt={2}>
            <Alert severity="error">
              {incompleteItem
                ? "One or more of the required fields is missing"
                : "Error creating/updating project"}
            </Alert>
          </Box>
        )}
      </Box>
    </>
  );
};
export default WorkItemForm;
