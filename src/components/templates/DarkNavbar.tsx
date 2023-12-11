import React, { ReactElement } from "react";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const DarkNavbar = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar textColor="black" />
      {children}
      <Footer />
    </>
  );
};

export default DarkNavbar;
