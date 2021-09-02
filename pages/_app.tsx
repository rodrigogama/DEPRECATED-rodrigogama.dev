import Head from 'next/head';
import type { AppProps } from 'next/app';
import 'swiper/swiper.scss';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>@rodrigogama.dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
