import DarkNavbar from "@/components/templates/DarkNavbar";
import Image from "next/image";
import React, { ReactElement } from "react";

const About = () => {
  return (
    <div className="about__container">
      <div className="section--hero">
        <div className="content position-relative">
          <div className="d-flex">
            <p>Home</p>
            <p>/</p>
            <p>About</p>
          </div>
          <div className="content__container position-relative">
            <h1>Force of Progress</h1>
            <p>
              Daya Dimensi Indonesia is a leadership consultant that supports
              organisations develop and deliver strategic programmes such as
              assessment centre, selection, learning, and personal &
              organisational transformation.
            </p>
          </div>
          <Image
            src={"shape-left.svg"}
            alt="vector"
            width={200}
            height={200}
            className="position-absolute vector bg__leftvector"
          />
          <Image
            src={"shape-right.svg"}
            alt="vector"
            width={200}
            height={200}
            className="position-absolute vector bg__rightvector"
          />
        </div>
        <div className="background"></div>
      </div>
    </div>
  );
};

About.Layout = function Layout(page: ReactElement) {
  return <DarkNavbar>{page}</DarkNavbar>;
};

export default About;
