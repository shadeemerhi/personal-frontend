import React, { useState } from "react";

import { Alert, Box, CircularProgress } from "@mui/material";

import InputField from "../Project/InputField";
import ImageUpload from "../Project/ImageUpload";
import { User } from "../../types/project";
import {
  NewUserInput,
  UpdateUserInput,
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../../generated/graphql";
import { useAuth } from "../../hooks/useAuth";

type ProfileProps = {
  profile: User;
};

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const [currentProfile, setCurrentProfile] = useState<User>(profile);
  const [createNew, setCreateNew] = useState(false);
  const handleChange = (field: string, value: string) => {
    setCurrentProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const { authKey } = useAuth();
  const [
    createUser,
    {
      data: createUserData,
      loading: createUserLoading,
      error: createUserError,
    },
  ] = useCreateUserMutation();
  const [
    updateUser,
    {
      data: updateUserData,
      loading: updateUserLoading,
      error: updateUserError,
    },
  ] = useUpdateUserMutation();

  const onSubmit = () => {
    createNew ? onCreateUser() : onUpdateUser();
  };

  const onUpdateUser = async () => {
    const updatedUser = { ...currentProfile };
    delete updatedUser.__typename;
    try {
      await updateUser({
        variables: {
          input: updatedUser as UpdateUserInput,
          adminKey: authKey,
        },
      });
    } catch (error) {
      console.log("updateUser error");
    }
  };

  const onCreateUser = async () => {
    try {
      await createUser({
        variables: {
          input: currentProfile as NewUserInput,
          adminKey: authKey,
        },
      });
    } catch (error) {
      console.log("createUser error", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      mb={10}
      maxWidth="600px"
      className="custom_form"
    >
      <Box mb={4}>
        <ImageUpload
          stateUpdateFunction={setCurrentProfile}
          photoFile={currentProfile.photoFile}
          photoURL={currentProfile.photoURL}
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
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        {(createUserError || updateUserError) && (
          <Box mb={2} mt={2}>
            <Alert severity="error">Error updating profile</Alert>
          </Box>
        )}
        {(createUserData || updateUserData) && (
          <Box mb={2} mt={2}>
            <Alert severity="success">Profile successfully updated</Alert>
          </Box>
        )}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={1}
          width="100%"
        >
          <button className="btn_primary submit_button" onClick={onSubmit}>
            {createUserLoading || updateUserLoading ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              <>{createNew ? "Create Profile" : "Save Changes"}</>
            )}
          </button>
        </Box>
        <span
          className="sm_text grey_text pointer"
          onClick={() => setCreateNew(!createNew)}
        >
          {createNew ? "Undo" : "New"}
        </span>
      </Box>
    </Box>
  );
};
export default Profile;
