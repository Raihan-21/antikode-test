import React, { ReactElement } from "react";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const WhiteNavbar = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WhiteNavbar;
