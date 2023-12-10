import React, { ReactElement } from "react";
import Navbar from "../molecules/Navbar";

const WhiteNavbar = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default WhiteNavbar;
