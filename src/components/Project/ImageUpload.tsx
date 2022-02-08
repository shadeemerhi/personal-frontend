import React, { useState } from "react";
import { Box } from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

import styles from "./ProjectForm.module.scss";
import { ProjectFormState } from "../../pages/projects";
import { Project } from "../../types/project";

type ImageUploadProps = {
  photoFile?: File;
  photoURL?: string;
  setCurrentProject: any;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  photoFile,
  photoURL,
  setCurrentProject,
}) => {

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files[0]) return;
    const image = event.target.files[0];
    setCurrentProject((prev: Project) => ({
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
        Project Image
        <label htmlFor="file-upload">
          <div className={`${styles.upload_button} pointer`}>Select File</div>
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
            <img src={photoFile ? URL.createObjectURL(photoFile) : photoURL} />
            {photoFile && (
              <span className="sm_text italic_text">{photoFile.name}</span>
            )}
          </>
        ) : (
          <>
            <PhotoCameraBackIcon
              className="disabled_text"
              style={{ fontSize: "30pt" }}
            />
            <span className="sm_text disabled_text">No Image Selected</span>
          </>
        )}
      </Box>
    </Box>
  );
};
export default ImageUpload;
