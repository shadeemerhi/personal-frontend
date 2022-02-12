import { Box } from "@mui/material";
import React, { useState } from "react";

import WorkItemForm from "./Form";
import WorkItemContent from "./Item";

// import { WorkItem } from "../../../types/experience";
import { useWorkItemsQuery, WorkItem } from "../../../generated/graphql";

type WorkItemsProps = {};

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
  workItem: WorkItem;
};

const WorkItems: React.FC<WorkItemsProps> = () => {
  const { data, loading, error } = useWorkItemsQuery();
  console.log("HERE ARE ITEMS", data, loading, error);

  const [showForm, setShowForm] = useState<WorkFormState>({
    visible: false,
    workItem: DEFAULT_WORK_ITEM,
  });

  return (
    <Box padding="10px 0px">
      {showForm.visible ? (
        <WorkItemForm workItem={showForm.workItem} setShowForm={setShowForm} />
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
                workItem: DEFAULT_WORK_ITEM,
              })
            }
          >
            Create Work Item
          </button>
          {data?.workItems.map((item) => (
            <WorkItemContent workItem={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};
export default WorkItems;
