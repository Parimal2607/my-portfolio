import '@/styles/globals.css'
import "../assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Parimal Sharma</title>
      </Head>
  <Component {...pageProps} />
    </>
  )
}
