import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("@themesberg/flowbite");
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css"
        />



<link rel="stylesheet" href="assets/css/all.css"/>

<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/css/boxicons.min.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-icons.css"/>

<link rel="stylesheet" href="assets/css/jquery-ui.css"/>

<link rel="stylesheet" href="assets/css/swiper-bundle.min.css"/>

<link rel="stylesheet" href="assets/css/slick-theme.css"/>
<link rel="stylesheet" href="assets/css/slick.css"/>

<link rel="stylesheet" href="assets/css/nice-select.css"/>

<link rel="stylesheet" href="assets/css/magnific-popup.css"/>

<link rel="stylesheet" href="assets/css/odometer.css"/>

<link rel="stylesheet" href="assets/css/style.css"/>




      </Head>




<>

<Script src="assets/js/main.js"    strategy="beforeInteractive"/>

      <Script
        src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
        strategy="beforeInteractive"
      />


<Script data-cfasync="false" src="https://demo-egenslab.b-cdn.net/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"/>
  
<Script src="assets/js/jquery-3.6.0.min.js"     strategy="beforeInteractive"  />
<Script src="assets/js/jquery-ui.js"    strategy="beforeInteractive"  />
<Script src="assets/js/bootstrap.bundle.min.js"   strategy="beforeInteractive"  />
<Script src="assets/js/wow.min.js"  strategy="beforeInteractive"   />
<Script src="assets/js/swiper-bundle.min.js"   strategy="beforeInteractive"  />
<Script src="assets/js/slick.js"    strategy="beforeInteractive" />
<Script src="assets/js/jquery.nice-select.js"   strategy="beforeInteractive"  />
<Script src="assets/js/odometer.min.js"   strategy="beforeInteractive"  />
<Script src="assets/js/viewport.jquery.js"  strategy="beforeInteractive"   />
<Script src="assets/js/jquery.magnific-popup.min.js"   strategy="beforeInteractive"   />




</>



      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
