import React, { useState } from "react";
import {
  useDeleteWorkItemMutation,
  WorkItem,
} from "../../../../generated/graphql";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { getProjectDateString } from "../../../../util/formatDates";

import classNames from "classnames";
import styles from "./WorkItem.module.scss";
import { Alert, Box } from "@mui/material";
import AdminIcons from "../../../Project/Item/AdminIcons";
import { WorkFormState } from "..";
import { ProjectFormState } from "../../../../pages/projects";

type WorkItemProps = {
  workItem: WorkItem;
  setShowForm: (value: any) => void;
  authKey: string;
};

const WorkItem: React.FC<WorkItemProps> = ({
  workItem,
  setShowForm,
  authKey,
}) => {
  const [play, setPlay] = useState(workItem.inProgress);
  const [deleteWorkItem, { loading, error }] = useDeleteWorkItemMutation();

  const onDelete = async () => {
    try {
      await deleteWorkItem({
        variables: {
          _id: workItem._id!,
          adminKey: authKey,
        },
        update: (cache) => {
          cache.evict({ id: `WorkItem:${workItem._id}` });
        },
      });
    } catch (error) {
      console.log("deleteWorkItem error", error);
    }
  };
  return (
    <>
      {error && (
        <Box mb={2} mt={2} width="100%">
          <Alert severity="error">Error deleting project</Alert>
        </Box>
      )}
      <div
        className={classNames({
          [styles.root]: true,
          [styles.paused]: !play, // to conditionally apply hover border
          border_main: play,
          border_off_white: !play,
        })}
      >
        <div className={styles.upper_content}>
          {play ? (
            <PauseCircleOutlineIcon
              className={styles.icon}
              onClick={() => setPlay(false)}
            />
          ) : (
            <PlayCircleOutlineIcon
              className={classNames({
                [styles.icon]: true,
                [styles.paused]: !play,
              })}
              onClick={() => setPlay(true)}
            />
          )}
          <div className={styles.title_container}>
            <span className="heavy_text md_text">{workItem.companyName}</span>
            <span className="sm_text">{workItem.title}</span>
            <span className="sm_text grey_text">
              {getProjectDateString(workItem.startDate, workItem.endDate)}
            </span>
            <span className="sm_text grey_text">{workItem.location}</span>
          </div>
        </div>
        {play && (
          <>
            {workItem.description.map((item) => (
              <Box display="flex" alignItems="flex-start" mb={1}>
                <span className="xs_text" style={{ marginRight: "4px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "6pt" }} />
                </span>
                <span className="sm_text">{item}</span>
              </Box>
            ))}
          </>
        )}
        {authKey && (
          <Box display="flex" justifyContent="flex-end">
            <AdminIcons
              onDelete={onDelete}
              setShowForm={setShowForm}
              loading={loading}
              formItem={workItem}
            />
          </Box>
        )}
      </div>
    </>
  );
};
export default WorkItem;
