import React, { useState } from "react";
import { EducationFormState } from ".";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert, Box, CircularProgress } from "@mui/material";
import InputField from "../../Project/InputField";

import { EducationItem } from "../../../generated/graphql";

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
    </>
  );
};
export default Form;
