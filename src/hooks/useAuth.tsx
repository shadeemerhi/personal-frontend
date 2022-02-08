import React, { useState, useContext, ReactNode } from "react";

type UseAuthProps = {
  children: ReactNode;
};

interface AuthContextInterface {
  authenticated: boolean;
  error: string;
  verifyKey: any; // will improve type
}

const AuthContext = React.createContext<AuthContextInterface>({
  authenticated: false,
  error: "",
  verifyKey: null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC<UseAuthProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const verifyKey = (key: string): boolean => {
    setError("");
    console.log('HERE ARE THINGS', key, process.env.NEXT_PUBLIC_ADMIN_KEY);
    

    const verified = key === process.env.NEXT_PUBLIC_ADMIN_KEY;
    if (!verified) {
      setError("Incorrect passphrase");
    } else {
      setAuthenticated(true);
      setError('');
    }
    return verified;
  };

  const value: AuthContextInterface = {
    authenticated,
    error,
    verifyKey,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
