import React, { useState } from "react";
import { Box } from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

import styles from "./ProjectForm.module.scss";

type ImageUploadProps = {};

const ImageUpload: React.FC<ImageUploadProps> = () => {
  const [image, setImage] = useState<any>();
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("here are the files", event.target.files);
    if (!event.target.files || !event.target.files[0]) return;
    const newImage = event.target.files[0];
    console.log("FILE TYPE", typeof newImage);
    setImage(newImage);
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
        {image ? (
          <>
            <img src={URL.createObjectURL(image)} />
            <span className="sm_text italic_text">{image?.name}</span>
          </>
        ) : (
          <>
            <PhotoCameraBackIcon className="disabled_text" style={{ fontSize: '30pt' }} />
            <span className="sm_text disabled_text">No Image Selected</span>
          </>
        )}
      </Box>
    </Box>
  );
};
export default ImageUpload;
