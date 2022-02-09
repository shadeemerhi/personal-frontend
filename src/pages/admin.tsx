import React from "react";

import Profile from "../components/Admin/Profile";
import { User } from "../types/project";

const DEFAULT_PROFILE: User = {
  title: "Full Stack Developer",
  photoFile: undefined,
  githubLink: "https://github.com/shadeemerhi",
  linkedInLink: "https://www.linkedin.com/in/shadee-m-a27134ba/",
  email: "shadmerhi@gmail.com",
  preBio: "",
  bio: "",
};

const Admin: React.FC<{}> = () => {
  return <Profile profile={DEFAULT_PROFILE} />;
};
export default Admin;
