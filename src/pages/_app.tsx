import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
