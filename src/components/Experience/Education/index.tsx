import React, { useState } from "react";
import { Box } from "@mui/material";

import EducationForm from "./Form";

import { EducationItem } from "../../../generated/graphql";

type EducationProps = {
  authKey: string;
};

export type EducationFormState = {
  visible: boolean;
  formItem: EducationItem;
};

const DEFAULT_EDUCATION_ITEM: EducationItem = {
  schoolName: "",
  title: "",
  startDate: new Date(),
  inProgress: true,
};

const Education: React.FC<EducationProps> = ({ authKey }) => {
  const [showForm, setShowForm] = useState<EducationFormState>({
    visible: false,
    formItem: DEFAULT_EDUCATION_ITEM,
  });

  return (
    <Box padding="10px 0px">
      {showForm.visible ? (
        <EducationForm
          educationItem={showForm.formItem}
          setShowForm={setShowForm}
          authKey={authKey}
        />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <button
            className="btn_primary"
            onClick={() =>
              setShowForm({
                visible: true,
                formItem: DEFAULT_EDUCATION_ITEM,
              })
            }
          >
            Create Education Item
          </button>
        </Box>
      )}
    </Box>
  );
};
export default Education;
