import { Box } from "@mui/material";
import React, { useState } from "react";

import WorkItemForm from "./Form";
import WorkItemContent from "./Item";

import { useWorkItemsQuery, WorkItem } from "../../../generated/graphql";

type WorkItemsProps = {
  authKey: string;
};

const DEFAULT_WORK_ITEM: WorkItem = {
  companyName: "",
  title: "",
  startDate: new Date(),
  inProgress: true,
  location: "",
  description: [],
};

export type WorkFormState = {
  visible: boolean;
  formItem: WorkItem;
};

const WorkItems: React.FC<WorkItemsProps> = ({ authKey }) => {
  const { data, error } = useWorkItemsQuery();

  const [showForm, setShowForm] = useState<WorkFormState>({
    visible: false,
    formItem: DEFAULT_WORK_ITEM,
  });

  if (error) {
    return <div>There was an error sad face</div>;
  }

  return (
    <Box padding="10px 0px">
      {showForm.visible ? (
        <WorkItemForm
          workItem={showForm.formItem}
          setShowForm={setShowForm}
          editing={!!showForm.formItem._id}
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
                formItem: DEFAULT_WORK_ITEM,
              })
            }
          >
            Create Work Item
          </button>
          {data?.workItems.map((item) => (
            <WorkItemContent
              workItem={item}
              setShowForm={setShowForm}
              authKey={authKey}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
export default WorkItems;
