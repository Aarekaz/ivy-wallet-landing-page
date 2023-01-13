import Head from "next/head";
import { RecoilRoot } from "recoil";

import "../styles/globals.scss";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;