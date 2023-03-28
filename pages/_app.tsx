import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
import Head from "next/head";
import "../styles/globals.css";
import { store } from '../features/store'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Speaker Shop</title>
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
