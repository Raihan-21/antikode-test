import React, { ReactElement } from "react";
import Navbar from "../molecules/Navbar";

const DarkNavbar = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar textColor="black" />
      {children}
    </>
  );
};

export default DarkNavbar;
