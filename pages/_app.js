import React from "react"
import App from "next/app";
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return(
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
