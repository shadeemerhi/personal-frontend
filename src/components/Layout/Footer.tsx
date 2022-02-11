import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="grey_text"
    >
      <CopyrightIcon sx={{ fontSize: "10pt", marginRight: "4px" }} />
      <span className="xs_text">Shadee Merhi 2022</span>
    </Box>
  );
};
export default Footer;
