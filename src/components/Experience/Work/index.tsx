import { Box } from "@mui/material";
import React, { useState } from "react";

import WorkItemForm from "./Form";
import { WorkItem } from "../../../types/experience";

type WorkItemsProps = {};

const DEFAULT_WORK_ITEM: WorkItem = {
  companyName: "",
  title: "",
  startDate: new Date(),
  endDate: null,
  inProgress: true,
  description: [],
};

export type WorkFormState = {
  visible: boolean;
  workItem: WorkItem;
};

const WorkItems: React.FC<WorkItemsProps> = () => {
  const [showForm, setShowForm] = useState<WorkFormState>({
    visible: false,
    workItem: DEFAULT_WORK_ITEM,
  });

  return (
    <Box padding="10px 0px">
      {showForm.visible ? (
        <WorkItemForm setShowForm={setShowForm} />
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
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
        </Box>
      )}
    </Box>
  );
};
export default WorkItems;
