import React from "react";
import { WorkFormState } from ".";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type FormProps = {
  setShowForm: (value: any) => void;
};

const WorkItemForm: React.FC<FormProps> = ({ setShowForm }) => {
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
    </>
  );
};
export default WorkItemForm;
