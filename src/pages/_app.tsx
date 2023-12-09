import Navbar from "@/components/molecules/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
