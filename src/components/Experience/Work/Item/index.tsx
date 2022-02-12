import React, { useState } from "react";
import { WorkItem } from "../../../../generated/graphql";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

import { getProjectDateString } from "../../../../util/formatDates";

import classNames from "classnames";
import styles from "./WorkItem.module.scss";

type WorkItemProps = {
  workItem: WorkItem;
};

const WorkItem: React.FC<WorkItemProps> = ({ workItem }) => {
  const [play, setPlay] = useState(workItem.inProgress);
  return (
    <div className={styles.root}>
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
    </div>
  );
};
export default WorkItem;
