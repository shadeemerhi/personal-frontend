import React from "react";
import { Box } from "@mui/material";
import { Stack, StackInputItem } from "../../../types/project";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "../ProjectForm.module.scss";

type StackItemProps = {
  name: string;
  category: string;
  deleteItem?: any;
};

const StackItem: React.FC<StackItemProps> = ({
  name,
  category,
  deleteItem,
}) => {
  return (
    <div className={styles.stack_item}>
      <span className="sm_text">{name}</span>
      {deleteItem && (
        <ClearIcon
          className="pointer"
          sx={{ fontSize: "10pt" }}
          onClick={() => deleteItem({ name, category })}
        />
      )}
    </div>
  );
};
export default StackItem;
