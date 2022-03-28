import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layouts from "../components/Layout";
import AuthProvider from "../hooks/useAuth";
import YoutubeProvider from "../hooks/useYoutube";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <YoutubeProvider>
        {/* <Layouts> */}
        <Component {...pageProps} />
        {/* </Layouts> */}
      </YoutubeProvider>
    </AuthProvider>
  );
}

export default MyApp;
