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
};

const ModalContainer: React.FC<ModalProps> = ({ open, setOpen }) => {
  const [key, setKey] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { authenticated, error, verifyKey } = useAuth();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKey("");
    const verified = verifyKey(key);
    console.log('HERE IS VERIFIED', verified);
    
    if (verified) handleClose();
  };

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
          <form onSubmit={onSubmit}>
            <Box mb={2}>
              <span id="modal-modal-title">Enter Passphrase</span>
            </Box>
            <input
              placeholder="passphrase"
              type="password"
              value={key}
              onChange={(event) => setKey(event.target.value)}
            />
          </form>
          {error && (
            <Box mt={2} className="danger_text">
              Incorrect passphrase!
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalContainer;
