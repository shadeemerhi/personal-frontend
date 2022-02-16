import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

type AuthModalProps = {
  handleClose?: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ handleClose }) => {
  const [key, setKey] = useState("");

  const { authKey, error, verifyKey } = useAuth();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKey("");
    const verified = verifyKey(key);
    if (verified) handleClose!();
  };

  return (
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
  );
};
export default AuthModal;
