import React, { useState } from "react";
import { WorkFormState } from ".";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
import InputField from "../../Project/InputField";
import { WorkItem } from "../../../types/experience";

import DateInputs from "../../Project/DateInputs";
import Description from "./Description";

import styles from "../../Project/ProjectForm.module.scss";

type FormProps = {
  setShowForm: (value: any) => void;
  workItem: WorkItem;
};

const WorkItemForm: React.FC<FormProps> = ({ workItem, setShowForm }) => {
  const [currentItem, setCurrentItem] = useState(workItem);
  const handleChange = () => {};

  const handleDescriptionChange = (item: string, adding?: boolean) => {
    const updatedLinks = adding
      ? [...currentItem.description, item]
      : currentItem.description.filter((l) => l !== item);
    setCurrentItem((prev) => ({
      ...prev,
      repositoryLinks: updatedLinks,
    }));
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
              name="Company Name"
              handleChange={handleChange}
              label="Company Name"
              placeholder="Company Name"
              value={workItem.companyName}
            />
          </Box>
          <Box
            className={styles.input_container}
            display="flex"
            flexDirection="column"
          >
            <InputField
              name="Title"
              handleChange={handleChange}
              label="Title"
              placeholder="Title"
              value={workItem.title}
            />
          </Box>
          <DateInputs
            startDate={currentItem.startDate}
            endDate={currentItem.endDate}
            inProgress={currentItem.inProgress}
            handleChange={handleChange}
          />
          <Description
            description={currentItem.description}
            handleChange={handleDescriptionChange}
          />
        </Box>
      </Box>
    </>
  );
};
export default WorkItemForm;