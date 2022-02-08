import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useAuth } from "../../hooks/useAuth";

import styles from "./Modal.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  error?: string;
};

const ModalWrapper: React.FC<ModalProps> = ({
  open,
  setOpen,
  error,
  children,
}) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleClose });
    }
    return child;
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className={styles.root}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {childrenWithProps}
          {error && (
            <Box mt={2} className="danger_text">
              {error}
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWrapper;
