import React from "react";

import { Box } from "@mui/material";
import AdminIcons from "../../../Project/Item/AdminIcons";

import { EducationItem } from "../../../../generated/graphql";
import { getProjectDateString } from "../../../../util/formatDates";

import styles from "./EducationItem.module.scss";
import classNames from "classnames";

type EducationItemProps = {
  educationItem: EducationItem;
  setShowForm: (value: any) => void;
  authKey: string;
  index: number;
  listLength: number;
};

const EducationItem: React.FC<EducationItemProps> = ({
  educationItem,
  setShowForm,
  authKey,
  index,
  listLength,
}) => {
  const onDelete = async () => {};
  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles.border_top]: true,
        [styles.border_bottom]: index === listLength - 1,
      })}
    >
      <div className={styles.title_container}>
        <span className="md_text heavy_text">{educationItem.schoolName}</span>
        <span className="sm_text">{educationItem.title}</span>
      </div>
      <div className={styles.date_icon_container}>
        <span className="sm_text grey_text">
          {getProjectDateString(educationItem.startDate, educationItem.endDate)}
        </span>
        {true && (
          <Box display="flex" justifyContent="flex-end">
            <AdminIcons
              formItem={educationItem}
              onDelete={onDelete}
              setShowForm={setShowForm}
              loading={false}
            />
          </Box>
        )}
      </div>
    </div>
  );
};
export default EducationItem;
