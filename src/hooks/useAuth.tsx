import React, { useState, useContext, ReactNode } from "react";

type UseAuthProps = {
  children: ReactNode;
};

interface AuthContextInterface {
  authKey: string;
  error: string;
  verifyKey: any; // will improve type
}

const AuthContext = React.createContext<AuthContextInterface>({
  authKey: "",
  error: "",
  verifyKey: null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC<UseAuthProps> = ({ children }) => {
  const [authKey, setAuthKey] = useState("");
  const [error, setError] = useState("");

  const verifyKey = (key: string): boolean => {
    setError("");
    console.log("HERE ARE THINGS", key, process.env.NEXT_PUBLIC_ADMIN_KEY);

    const verified = key === process.env.NEXT_PUBLIC_ADMIN_KEY;
    if (!verified) {
      setError("Incorrect passphrase");
    } else {
      setAuthKey(key);
      setError("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return verified;
  };

  const value: AuthContextInterface = {
    authKey,
    error,
    verifyKey,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
