import React, { useState } from "react";
import { Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "../../Project/ProjectForm.module.scss";

type DescriptionProps = {
  description: string[];
  handleChange: (item: string, adding?: boolean) => void;
};

const Description: React.FC<DescriptionProps> = ({
  description,
  handleChange,
}) => {
  const [item, setItem] = useState("");

  const onAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!item) return;
    handleChange(item, true);
    setItem("");
  };

  return (
    <Box
      className={styles.input_container}
      display="flex"
      flexDirection="column"
    >
      <form onSubmit={onAddItem}>
        <label className="medium_text">Description</label>
        <input
          onChange={(event) => setItem(event.target.value)}
          placeholder="Add item"
          value={item}
        />
      </form>
      <Box mt={2}>
        {description.map((item) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <span className="light_text sm_text">{item}</span>
            <ClearIcon
              className="pointer"
              sx={{ fontSize: "12pt" }}
              onClick={() => handleChange(item)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Description;
