import { Box } from "@mui/material";
import React, { useState } from "react";
import { StackInputItem } from "../../types/project";
import styles from "./ProjectForm.module.scss";

type StackProps = {
  handleChange: any;
};

const Stack: React.FC<StackProps> = ({ handleChange }) => {
  const [item, setItem] = useState<StackInputItem>({
    name: "",
    category: "frontend",
  });
  const onAddLink = (event: React.FormEvent<HTMLFormElement>) => {
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
      <form onSubmit={onAddLink} className={styles.stack_form}>
        <label className="medium_text">Project Stack</label>
        <Box display="flex" justifyContent="space-between">
          <input
            name="repositoryLinks"
            onChange={(event) =>
              setItem({
                ...item,
                name: event.target.value,
              })
            }
            placeholder="Item"
            value={item.name}
          />
          <select name="pets" id="pet-select">
            <option value="">Frontend</option>
            <option value="dog">Backend</option>
            <option value="cat">Other</option>
          </select>
        </Box>
      </form>
      <Box display="flex" flexDirection="column" mt={2} mb={2}>
        <Box mb={1}>
          <span className="light_text sm_text">Frontend</span>
        </Box>
      </Box>
    </Box>
  );
};
export default Stack;
