import DarkNavbar from "@/components/templates/DarkNavbar";
import React, { ReactElement } from "react";

const About = () => {
  return <div>About</div>;
};

About.Layout = function Layout(page: ReactElement) {
  return <DarkNavbar>{page}</DarkNavbar>;
};

export default About;
