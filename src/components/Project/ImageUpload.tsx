import React, { useState } from "react";
import { Box } from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

import styles from "./ProjectForm.module.scss";
import { Project, User } from "../../types/project";

type ImageUploadProps = {
  stateUpdateFunction: any;
  title: string;
  photoFile?: File;
  photoURL?: string;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  stateUpdateFunction,
  title,
  photoFile,
  photoURL,
}) => {
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files[0]) return;
    const image = event.target.files[0];
    stateUpdateFunction((prev: Project | User) => ({
      ...prev,
      photoFile: image,
    }));
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      className={styles.input_container}
    >
      <Box display="flex" justifyContent="space-between" mb={2}>
        {title}
        <label htmlFor="file-upload">
          <div className={`btn_grey pointer`}>Select File</div>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          style={{ display: "none" }}
          onChange={onImageChange}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {photoFile || photoURL ? (
          <>
            <img
              src={photoFile ? URL.createObjectURL(photoFile) : photoURL}
              style={{ maxWidth: "400px" }}
            />
            {photoFile && (
              <span className="sm_text italic_text">{photoFile.name}</span>
            )}
          </>
        ) : (
          <>
            <PhotoCameraBackIcon
              className="grey_text"
              style={{ fontSize: "30pt" }}
            />
            <span className="sm_text grey_text">No Image Selected</span>
          </>
        )}
      </Box>
    </Box>
  );
};
export default ImageUpload;
