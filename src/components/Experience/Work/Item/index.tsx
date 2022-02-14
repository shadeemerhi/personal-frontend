import React, { useState } from "react";
import { WorkItem } from "../../../../generated/graphql";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { getProjectDateString } from "../../../../util/formatDates";

import classNames from "classnames";
import styles from "./WorkItem.module.scss";
import { Box } from "@mui/material";
import AdminIcons from "../../../Project/Item/AdminIcons";
import { WorkFormState } from "..";
import { ProjectFormState } from "../../../../pages/projects";

type WorkItemProps = {
  workItem: WorkItem;
  setShowForm: (value: any) => void;
};

const WorkItem: React.FC<WorkItemProps> = ({ workItem, setShowForm }) => {
  const [play, setPlay] = useState(workItem.inProgress);

  const onDelete = async () => {};
  return (
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
      <Box display="flex" justifyContent="flex-end">
        <AdminIcons
          onDelete={onDelete}
          setShowForm={setShowForm}
          loading={false}
          formItem={workItem}
        />
      </Box>
    </div>
  );
};
export default WorkItem;
