import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Layouts from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layouts>
          <Component {...pageProps} />
      </Layouts>
  );
}

export default MyApp
