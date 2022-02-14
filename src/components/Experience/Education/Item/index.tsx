import React from "react";

import { Alert, Box } from "@mui/material";
import AdminIcons from "../../../Project/Item/AdminIcons";

import {
  EducationItem,
  useDeleteEducationItemMutation,
} from "../../../../generated/graphql";
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
  const [deleteEducationItem, { loading, error }] =
    useDeleteEducationItemMutation();

  const onDelete = async () => {
    try {
      const { data } = await deleteEducationItem({
        variables: {
          _id: educationItem._id!,
          adminKey: authKey,
        },
        update: (cache) => {
          cache.evict({ id: `EducationItem:${educationItem._id}` });
        },
      });
      console.log("HERE IS DELETE RESPONSE", data);
    } catch (error) {
      console.log("deleteEducationItem error", error);
    }
  };

  return (
    <>
      {error && (
        <Box mb={2} mt={2} width="100%">
          <Alert severity="error">Error deleting education item</Alert>
        </Box>
      )}
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
            {getProjectDateString(
              educationItem.startDate,
              educationItem.endDate
            )}
          </span>
          {true && (
            <Box display="flex" justifyContent="flex-end">
              <AdminIcons
                formItem={educationItem}
                onDelete={onDelete}
                setShowForm={setShowForm}
                loading={loading}
              />
            </Box>
          )}
        </div>
      </div>
    </>
  );
};
export default EducationItem;
