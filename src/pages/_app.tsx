import Navbar from "@/components/molecules/Navbar";
import "@/styles/globals.css";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { ReactElement, ReactNode, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import WhiteNavbar from "@/components/templates/WhiteNavbar";
import { Tstar } from "@/assets/fonts/Fonts";

type NextPageWithLayout = {
  Layout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// type AppWithProps = Ap

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const getLayout =
    Component.Layout ?? ((page) => <WhiteNavbar>{page}</WhiteNavbar>);

  return (
    <>
      {/* <Navbar /> */}
      {getLayout(
        <main className={Tstar.className}>
          <Component {...pageProps} />
        </main>
      )}
    </>
  );
}
