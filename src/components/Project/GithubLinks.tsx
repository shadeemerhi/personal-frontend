import React, { useState } from "react";
import { Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./ProjectForm.module.scss";

type GithubLinksProps = {
  repositoryLinks: string[];
  handleChange: (link: string, adding?: boolean) => void;
};

const GithubLinks: React.FC<GithubLinksProps> = ({
  repositoryLinks,
  handleChange,
}) => {
  const [link, setLink] = useState("");

  const onAddLink = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!link) return;
    handleChange(link, true);
    setLink("");
  };

  return (
    <Box
      className={styles.input_container}
      display="flex"
      flexDirection="column"
    >
      <form onSubmit={onAddLink}>
        <label className="medium_text">Github Links</label>
        <input
          onChange={(event) => setLink(event.target.value)}
          placeholder="Link"
          value={link}
        />
      </form>
      <Box mt={2}>
        {repositoryLinks.map((link) => (
          <Box display="flex" justifyContent="space-between" alignItems='center'>
            <span className="light_text sm_text">{link}</span>
            <ClearIcon
              className="pointer"
              sx={{ fontSize: "12pt" }}
              onClick={() => handleChange(link)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default GithubLinks;
