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
      <div className="section--second position-relative">
        <div className="graysection position-absolute top-0"></div>
        <div className="content__container">
          <h2>Daya Dimensi In Numbers</h2>
          <div className="d-flex justify-content-between">
            <div>
              <p className="number__heading mb-0">24+ Years</p>
              <p>Experience</p>
            </div>
            <div>
              <p className="number__heading mb-0">50.000+</p>
              <p>Executive Clients</p>
            </div>
            <div>
              <p className="number__heading mb-0">400+</p>
              <p>Organization Clients</p>
            </div>
          </div>
          <div className="grid__container">
            <div>
              <img src={"/img-leaders.jpg"} className="w-full" />
              <p className="fs-2">Leaders of a New Planet</p>
              <p>
                It is our intention is to generate leaders whose mission is to
                advance humanity through fresh ideas, forefront skills, and
                compassion for future generations. We call them Leaders of a New
                Planet.
              </p>
            </div>
            <div>
              <img src={"/img-innovations.jpg"} className="w-full" />
              <p className="fs-2">Continuous Innovations</p>
              <p>
                In working with clients, we curate and provide integrated
                business and leadership solutions. Therefore, we strive to grow
                our digital solutions to better cater your needs.
              </p>
              <div className="d-flex">
                <p>Learn More</p>
                <Image src={"arrow.svg"} alt="arrow" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section--collaborate">
        <h2>Reasons to Collaborate</h2>
        <div className="grid__container">
          <div>
            <div className="icon__container mb-3">
              <img src="icon-learning.svg" alt="" />
            </div>
            <div>
              <p className="fs-3 mb-1">Ethical</p>
              <p>
                We maintain the confidentiality of our clients' data. We uphold
                our integrity by practicing zero-tolerance policy for bribery.
              </p>
            </div>
          </div>
          <div>
            <div className="icon__container mb-3">
              <img src="icon-star.svg" alt="" />
            </div>
            <div>
              <p className="fs-3 mb-1">Reliable</p>
              <p>
                We strive to provide solutions that are supported by data and
                technology.
              </p>
            </div>
          </div>
          <div>
            <div className="icon__container mb-3">
              <img src="icon-hand.svg" alt="" />
            </div>
            <div>
              <p className="fs-3 mb-1">Agile</p>
              <p>
                We listen to our clients deliberately and deliver bespoke
                solutions to achieve excellent outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section--clients">
        <h2 className="text-white">Our Clients</h2>
        <div className="d-flex flex-wrap">
          <Image
            src={"/astrainternational.png"}
            alt="astra"
            width={174}
            height={174}
          />
          <Image src={"/blibli.png"} alt="astra" width={174} height={174} />
          <Image src={"/bri.png"} alt="astra" width={174} height={174} />
          <Image src={"/ifg.png"} alt="astra" width={174} height={174} />
          <Image src={"/kalbefarma.png"} alt="astra" width={174} height={174} />
          <Image src={"/kemdikbud.png"} alt="astra" width={174} height={174} />
          <Image src={"/mandiri.png"} alt="astra" width={174} height={174} />
          <Image src={"/mindid.png"} alt="astra" width={174} height={174} />
          <Image src={"/pertamina.png"} alt="astra" width={174} height={174} />
          <Image src={"/pln.png"} alt="astra" width={174} height={174} />
        </div>
      </div>
      <div className="section--bottom position-relative">
        <div className="content__container">
          <div className="content">
            <p className="fs-3 heading ">Family</p>
            <div className="hidden">
              <p>Introducing the DayaLima Family</p>
              <div className="d-flex align-items-center">
                <p className="mb-1 me-2">LEARN MORE</p>
                <Image src={"/arrow.svg"} alt="arrow" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="content">
            <p className="fs-3 heading">Board of Management</p>
            <div className="hidden">
              <p>Introducing the DayaLima Family</p>
              <div className="d-flex align-items-center">
                <p className="mb-1 me-2">LEARN MORE</p>
                <Image src={"/arrow.svg"} alt="arrow" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="content">
            <p className="fs-3 heading">Partners</p>
            <div className="hidden">
              <p>Introducing the DayaLima Family</p>
              <div className="d-flex align-items-center">
                <p className="mb-1 me-2">LEARN MORE</p>
                <Image src={"/arrow.svg"} alt="arrow" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.Layout = function Layout(page: ReactElement) {
  return <DarkNavbar>{page}</DarkNavbar>;
};

export default About;
