import { Box } from "@mui/material";
import React, { useState } from "react";
import { Stack, StackInputItem } from "../../types/project";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./ProjectForm.module.scss";

type StackProps = {
  handleChange: (stackItem: StackInputItem, adding?: boolean) => void;
  stack: Stack;
};

const Stack: React.FC<StackProps> = ({ stack, handleChange }) => {
  const [item, setItem] = useState<StackInputItem>({
    name: "",
    category: "frontend",
  });
  const onAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!item) return;
    handleChange(item, true);
    setItem({
      ...item,
      name: "",
    });
  };

  return (
    <Box
      className={styles.input_container}
      display="flex"
      flexDirection="column"
    >
      <form onSubmit={onAddItem} className={styles.stack_form}>
        <label className="medium_text">Project Stack</label>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <input
              onChange={(event) =>
                setItem({
                  ...item,
                  name: event.target.value,
                })
              }
              placeholder="Item"
              value={item.name}
            />
            <select
              name="pets"
              id="pet-select"
              onChange={(event) =>
                setItem({
                  ...item,
                  category: event.target.value as typeof item.category,
                })
              }
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="other">Other</option>
            </select>
          </Box>
          <Box>
            <button disabled={!item.name}>Add Item</button>
          </Box>
        </Box>
      </form>
      <Box display="flex" flexDirection="column" mt={2} mb={2}>
        <Box mb={1}>
          <span className="light_text sm_text">Frontend</span>
          {stack.frontend.map((itemName) => (
            <Box>
              {itemName}{" "}
              <ClearIcon
                className="pointer"
                sx={{ fontSize: "12pt" }}
                onClick={() =>
                  handleChange({ name: itemName, category: "frontend" })
                }
              />
            </Box>
          ))}
        </Box>
        <Box mb={1}>
          <span className="light_text sm_text">Backend</span>
          {stack.backend.map((itemName) => (
            <Box>
              {itemName}{" "}
              <ClearIcon
                className="pointer"
                sx={{ fontSize: "12pt" }}
                onClick={() =>
                  handleChange({ name: itemName, category: "backend" })
                }
              />
            </Box>
          ))}
        </Box>
        <Box mb={1}>
          <span className="light_text sm_text">Other</span>
          {stack.other.map((itemName) => (
            <Box>
              {itemName}{" "}
              <ClearIcon
                className="pointer"
                sx={{ fontSize: "12pt" }}
                onClick={() =>
                  handleChange({ name: itemName, category: "other" })
                }
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Stack;
