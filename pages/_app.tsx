import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
import Head from "next/head";
import "../styles/globals.css";
import { store } from '../features/store'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import  {persistStore} from "redux-persist";

const persistStoreUSer = persistStore(store);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Speaker Shop</title>
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStoreUSer}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}
