import React, { useState } from "react";
import { Box } from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

import styles from "./ProjectForm.module.scss";

type ImageUploadProps = {
  photoFile: File | undefined;
  setPhotoFile: (file: File) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  photoFile,
  setPhotoFile,
}) => {
  //   const [image, setImage] = useState<File>();

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files[0]) return;
    const image = event.target.files[0];
    setPhotoFile(image);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      className={styles.input_container}
    >
      <Box display="flex" justifyContent="space-between" mb={2}>
        Project Image
        <label for="file-upload" class="custom-file-upload">
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
        {photoFile ? (
          <>
            <img src={URL.createObjectURL(photoFile)} />
            <span className="sm_text italic_text">{photoFile.name}</span>
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
