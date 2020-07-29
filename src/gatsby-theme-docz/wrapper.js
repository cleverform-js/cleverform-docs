import * as React from "react";
import { Helmet } from "react-helmet-async";

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      {/* <title>Most easiest way to have form validation in javascript!</title> */}
      {/* <link rel="icon" type="image/png" href="http://example.com/myicon.png" /> */}

      <link rel="apple-touch-icon" sizes="57x57" href="/src-docz/assets/icon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/src-docz/assets/icon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/src-docz/assets/icon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/src-docz/assets/icon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/src-docz/assets/icon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/src-docz/assets/icon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/src-docz/assets/icon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/src-docz/assets/icon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/src-docz/assets/icon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/src-docz/assets/icon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/src-docz/assets/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/src-docz/assets/icon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/src-docz/assets/icon/favicon-16x16.png" />
        <link rel="manifest" href="/src-docz/assets/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
    </Helmet>
    {children}
  </React.Fragment>
);
export default Wrapper;
