import Head from 'next/head';
import { useLayoutEffect } from 'react';
import '../web/css/styles.css';

function MyApp({ Component, pageProps }) {
	
	useLayoutEffect(() => {
		document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="/css/_vars-dark-mode.css" media="(prefers-color-scheme: dark)" data-media="(prefers-color-scheme: dark)" />`);
	});
  
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