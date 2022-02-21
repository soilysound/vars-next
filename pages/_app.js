import Head from 'next/head';
import '../web/css/styles.css';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
				<link rel="icon" href="/favicon.ico" />
      </Head>
			 <Component {...pageProps} />
    </>
  )
}

export default MyApp