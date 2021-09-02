import type { AppProps } from 'next/app';
import 'swiper/swiper.scss';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
