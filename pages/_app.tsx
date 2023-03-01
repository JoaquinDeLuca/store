import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'
import Head from 'next/head'
import '../index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head >
            <title>Watch Store</title>
        </Head>

        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
  )
}