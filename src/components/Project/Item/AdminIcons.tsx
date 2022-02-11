import React from "react";
import { Project } from "../../../types/project";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import styles from "./ProjectItem.module.scss";
import { ProjectFormState } from "../../../pages/projects";
import { Box, CircularProgress } from "@mui/material";

type AdminIconsProps = {
  setShowForm: (value: ProjectFormState) => void;
  onDelete: () => void;
  project: Project;
  loading: boolean;
};

const AdminIcons: React.FC<AdminIconsProps> = ({
  project,
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
            project,
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
