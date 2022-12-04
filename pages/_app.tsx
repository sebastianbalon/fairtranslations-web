import React, { Component } from "react";
import "../styles/styles.sass";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
