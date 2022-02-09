import React, { useState } from "react";

import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import InputField from "../Project/InputField";
import ImageUpload from "../Project/ImageUpload";
import { User } from "../../types/project";

type ProfileProps = {
  profile: User;
};

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const [currentProfile, setCurrentProfile] = useState<User>(profile);
  const handleChange = (field: string, value: string) => {
    setCurrentProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box display="flex" flexDirection="column" mb={10} maxWidth="600px">
      <Box mb={4}>
        <ImageUpload
          stateUpdateFunction={setCurrentProfile}
          photoFile={currentProfile.photoFile}
          title="Header Image"
        />
      </Box>
      <InputField
        name="title"
        handleChange={handleChange}
        label="Current Title"
        placeholder="Title"
        value={currentProfile.title}
      />
      <br />
      <InputField
        name="githubLink"
        handleChange={handleChange}
        label="Github Link"
        placeholder="Github Link"
        value={currentProfile.githubLink}
      />
      <br />
      <InputField
        name="linkedInLink"
        handleChange={handleChange}
        label="LinkedIn"
        placeholder="LinkedIn Link"
        value={currentProfile.linkedInLink}
      />
      <br />
      <InputField
        name="email"
        handleChange={handleChange}
        label="Email"
        placeholder="Email"
        value={currentProfile.email}
      />
      <br />
      <InputField
        name="preBio"
        handleChange={handleChange}
        label="Pre Bio"
        placeholder="Title"
        textarea
        value={currentProfile.preBio}
      />
      <br />
      <InputField
        name="bio"
        handleChange={handleChange}
        label="Bio"
        placeholder="Bio"
        textarea
        value={currentProfile.bio}
      />
      <Box display="flex" justifyContent="center" mt={4}>
        <button
          className="btn_primary"
          //   onClick={onSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Save Profile
        </button>
      </Box>
    </Box>
  );
};
export default Profile;
