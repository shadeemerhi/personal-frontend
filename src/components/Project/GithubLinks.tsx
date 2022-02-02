import React, { useState } from "react";
import { Box } from "@mui/material";
import InputField from "./InputField";

import styles from "./ProjectForm.module.scss";

type GithubLinksProps = {
  repositoryLinks: string[];
  handleChange: any;
};

const GithubLinks: React.FC<GithubLinksProps> = ({
  repositoryLinks,
  handleChange,
}) => {
  const [link, setLink] = useState("");

  const onAddLink = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          name="repositoryLinks"
          onChange={(event) => setLink(event.target.value)}
          placeholder="Link"
        />
      </form>
      {repositoryLinks.map((link) => (
        <Box>
          <span className="light_text italic_text">www.lol.com</span>
        </Box>
      ))}
    </Box>
  );
};
export default GithubLinks;
