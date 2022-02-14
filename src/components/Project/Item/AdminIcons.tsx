import React from "react";
import { Project } from "../../../types/project";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { ProjectFormState } from "../../../pages/projects";
import { Box, CircularProgress } from "@mui/material";
import { WorkFormState } from "../../Experience/Work";
import { WorkItem } from "../../../generated/graphql";
import styles from "./AdminIcon.module.scss";

type AdminIconsProps = {
  setShowForm: (value: any) => void;
  onDelete: () => void;
  formItem: Project | WorkItem;
  loading: boolean;
};

const AdminIcons: React.FC<AdminIconsProps> = ({
  formItem,
  setShowForm,
  loading,
  onDelete,
}) => {
  return (
    <div className={styles.icon_container}>
      <EditIcon
        className="pointer"
        onClick={() =>
          setShowForm({
            visible: true,
            formItem,
          })
        }
      />
      <Box display="flex" justifyContent="center" alignItems="center" ml={1}>
        {loading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <DeleteOutlineIcon className="pointer" onClick={onDelete} />
        )}
      </Box>
    </div>
  );
};
export default AdminIcons;
