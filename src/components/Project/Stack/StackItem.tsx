import React from "react";
import { Box } from "@mui/material";
import { Stack, StackInputItem } from "../../../types/project";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "../ProjectForm.module.scss";
import classNames from "classnames";

type StackItemProps = {
  name: string;
  category: string;
  deleteItem?: any;
  borderColor: "main" | "white";
};

const StackItem: React.FC<StackItemProps> = ({
  name,
  category,
  deleteItem,
  borderColor,
}) => {
  return (
    <div
      className={classNames({
        [styles.stack_item]: true,
        border_main: borderColor === "main",
        border_white: borderColor === "white",
      })}
    >
      <span>{name}</span>
      {deleteItem && (
        <ClearIcon
          className="pointer"
          sx={{ fontSize: "10pt", marginLeft: "2px" }}
          onClick={() => deleteItem({ name, category })}
        />
      )}
    </div>
  );
};
export default StackItem;
