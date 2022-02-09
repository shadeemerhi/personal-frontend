import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layouts from "../components/Layout";
import AuthProvider from "../hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* <Layouts> */}
        <Component {...pageProps} />
      {/* </Layouts> */}
    </AuthProvider>
  );
}

export default MyApp;
