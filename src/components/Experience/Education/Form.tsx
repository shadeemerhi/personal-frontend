import React, { useState } from "react";
import { EducationFormState } from ".";
import { EducationItem } from "../../../generated/graphql";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert, Box, CircularProgress } from "@mui/material";

import InputField from "../../Project/InputField";
import DateInputs from "../../Project/DateInputs";

import styles from "../../Project/ProjectForm.module.scss";

type FormProps = {
  setShowForm: (value: any) => void;
  educationItem: EducationItem;
  authKey: string;
  editing?: boolean;
};

const Form: React.FC<FormProps> = ({
  setShowForm,
  educationItem,
  authKey,
  editing,
}) => {
  const [currentItem, setCurrentItem] = useState(educationItem);
  const [incompleteItem, setIncompleteItem] = useState(false);

  const handleChange = (
    field: string,
    value: string | boolean | Date | null | undefined
  ) => {
    setCurrentItem((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = () => {};

  return (
    <>
      <ArrowBackIcon
        className="pointer"
        onClick={() =>
          setShowForm((prev: EducationFormState) => ({
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
              name="schoolName"
              handleChange={handleChange}
              label="School Name"
              placeholder="School Name"
              value={currentItem.schoolName}
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
        </Box>
        {false && (
          <Box mb={2} mt={2}>
            <Alert severity="success">
              {`Item successfully ${true ? "created" : "updated"}`}
              {". "}
              <span
                className="heavy_text pointer"
                onClick={() =>
                  setShowForm((prev: EducationFormState) => ({
                    ...prev,
                    visible: false,
                  }))
                }
              >
                View
              </span>
            </Alert>
          </Box>
        )}
        {(false || incompleteItem) && (
          <Box mb={2} mt={2}>
            <Alert severity="error">
              {incompleteItem
                ? "One or more of the required fields is missing"
                : "Error creating/updating project"}
            </Alert>
          </Box>
        )}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={styles.submit_container}
        >
          <button className="btn_primary submit_button" onClick={onSubmit}>
            {false ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              <>{editing ? "Save Item" : "Create Item"}</>
            )}
          </button>
        </Box>
      </Box>
    </>
  );
};
export default Form;
