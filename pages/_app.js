import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/social.css";
import "../styles/contractNav.css";
import "../styles/style.css"
import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Depth Search Limited</title>
      </Head>
      <Component {...pageProps} />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      ></Script>
      <Script src="https://cdn.tailwindcss.com"></Script>
    </>
  );
}

export default MyApp;
