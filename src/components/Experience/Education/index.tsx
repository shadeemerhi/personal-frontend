import React, { useState } from "react";
import { Box } from "@mui/material";

import EducationForm from "./Form";
import EducationItemContent from "./Item";

import {
  EducationItem,
  useEducationItemsQuery,
} from "../../../generated/graphql";

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
  const { data, error } = useEducationItemsQuery();
  const [showForm, setShowForm] = useState<EducationFormState>({
    visible: false,
    formItem: DEFAULT_EDUCATION_ITEM,
  });

  if (error) {
    return <div>There was an error sad face</div>;
  }

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
          <Box mb={2}>
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
          {data?.educationItems.map((item, index) => (
            <EducationItemContent
              educationItem={item}
              authKey={authKey}
              index={index}
              listLength={data.educationItems.length}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
export default Education;
