import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

const expertises = [
  {
    icon: "learning.svg",
    text: "Applied Science & Imagination Centre",
    img: "",
  },
  {
    icon: "diagnostic.svg",
    text: "Diagnostics and Assessments",
    img: "",
  },
  {
    icon: "transformation.svg",
    text: "Human Resources & Organizational Transformation",
    img: "",
  },
  {
    icon: "klobility.svg",
    text: "Klobility",
    img: "",
  },
  {
    icon: "executive.svg",
    text: "Leadership Development",
    img: "",
  },
  {
    icon: "learning.svg",
    text: "On-Demand Online Learning",
    img: "",
  },
];

const events = [
  {
    type: "PUBLIC WORKSHOP",
    date: "25 Feb 2022",
    title: "Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout",
  },
  {
    type: "BUKA PINTU",
    date: "25 Feb 2022",
    title: "Our New Solution To Hire The Right Person For Your Company",
  },
  {
    type: "LIVE WEBINAR",
    date: "25 Feb 2022",
    title: "DDI : Among Indonesia’s First Signatories of UN WEP",
  },
  {
    type: "BUKA PINTU",
    date: "25 Feb 2022",
    title: "Our New Solution To Hire The Right Person For Your Company",
  },
];

const carouselSettings = {
  arrows: true,
  dots: true,
  slidesToShow: 1,
  // dotsClass: "custom-dots",
};

const slides = [
  {
    logo: "/slide-logo.png",
    img: "",
    text: "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
    source: "Kementerian Pendidikan, Budaya, Riset, dan Teknologi",
  },
  {
    logo: "/slide-logo.png",
    img: "",
    text: "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
    source: "Kementerian Pendidikan, Budaya, Riset, dan Teknologi",
  },
  {
    logo: "/slide-logo.png",
    img: "",
    text: "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
    source: "Kementerian Pendidikan, Budaya, Riset, dan Teknologi",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Daya Dimensi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`position-relative section--hero`}>
          <div className="section__heading-container">
            <div className={`px-4 text-white heading__content`}>
              <h1 className="tstar-light">Adopt Globally, Adopt Locally</h1>
              <p className="mb-4 text-fadewhite">
                Daya Dimensi Indonesia is a world-class strategic partner for
                individual and organisational transformation through
                humanity-based and technology-supported solutions to help you
                hire, promote, and develop exceptional leaders.
              </p>
              <div className={`d-flex more`}>
                <Link href={"/"} className="d-flex align-items-center">
                  <p className="mb-0 me-2 text-white">LEARN MORE ABOUT US</p>
                  <Image src={"arrow.svg"} alt="arrow" width={20} height={20} />
                </Link>
                <Link href={"/"} className="d-flex align-items-center">
                  <p className="mb-0 me-2 text-white">CONTACT US</p>
                  <Image src={"arrow.svg"} alt="arrow" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`d-flex flex-column flex-lg-row position-absolute align-items-center bottom-0 section--bottom`}
          >
            <div
              className={`bg-white d-flex align-items-center discover__container`}
            >
              <div className={`me-4 d-flex discover__btn}`}>
                <p className="fs-12px">DISCOVER</p>
                <Image src={"arrow.svg"} alt="arrow" width={20} height={20} />
              </div>
              <div className={`d-flex discover__content`}>
                <div>
                  <p className={`fs-2 mb-0 discover__heading`}>24+ Years</p>
                  <p>Experience</p>
                </div>
                <div>
                  <p className={`fs-2 mb-0 discover__heading`}>50.000+</p>
                  <p>Executive Clients</p>
                </div>
                <div>
                  <p className={`fs-2 mb-0 discover__heading`}>400+</p>
                  <p>Organization Clients</p>
                </div>
              </div>
            </div>
            <div className={`d-flex certification`}>
              <Image
                src={"/principles.png"}
                alt="principles"
                width={195}
                height={64}
              />
              <Image
                src={"/certification.png"}
                alt="certification"
                width={280}
                height={64}
              />
            </div>
          </div>
          <div className={`position-absolute overlay`}></div>
        </div>
        <div className="section--expertise">
          <h2>Expertise</h2>
          <p>
            &quot;Organisations who will succeed in the long-run are those who
            are open to new ideas, embrace innovations, instill compassion in
            every act and decision, and consistent in advancing humanity through
            sustainability.&quot; - Excerpts from &quot;Leaders of a New
            Planet&quot; book.
          </p>
          <div className="expertise__grid">
            {expertises.length &&
              expertises.map((expertise, i) => (
                <div className={`p-4 position-relative expertise__box`} key={i}>
                  <div className="bg--red"></div>
                  <div className="overlay"></div>
                  <div className="bg--img">
                    <img src="/expertise-img.jpg" alt="" className="" />
                  </div>
                  <div className="position-relative z-2">
                    <Image
                      src={expertise.icon}
                      alt="icon"
                      width={49}
                      height={49}
                      className="mb-3"
                    />
                    <p className="text-uppercase text-white fs-3">
                      {expertise.text}
                    </p>
                  </div>{" "}
                  <Image
                    src={"arrow.svg"}
                    alt="arrow"
                    width={40}
                    height={40}
                    className="expertise__arrow"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="section--slides position-relative">
          <div className="slide__content-container position-relative">
            <div className="d-flex flex-column flex-lg-row align-items-center slide__container">
              {/* <Image
                src={"/slide-bg.jpg"}
                alt="background"
                width={584}
                height={438}
              /> */}
              <img src="slide-bg.jpg" className="slide-img" />
              <div className=" text-white slide__content d-flex flex-column justify-center h-full">
                <img
                  src="/slide-logo.png"
                  alt="logo"
                  width={70}
                  height={51}
                  className="mb-2"
                />
                <div className="pagination"></div>
                <p className="fs-4">
                  Kolaborasi dalam Program Guru Penggerak sangat meaningful dan
                  impactful untuk perkembangan pendidikan di Indonesia, sehingga
                  perlu untuk dilakukan secara berkelanjutan.
                </p>
                <p className="text-fadewhite">
                  Kementerian Pendidikan, Budaya, Riset, dan Teknologi
                </p>
                <div className="d-flex align-items-center pagination__container">
                  <div className="slide__pagination position-relative"></div>
                  <div className="d-flex pagination-arrow__container">
                    <div className="pagination__arrow">
                      <Image
                        src={"/icon-chevron.svg"}
                        alt="chevron"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="pagination__arrow pagination__arrow--right">
                      <Image
                        src={"/icon-chevron.svg"}
                        alt="chevron"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Slider {...carouselSettings} className="position-relative z-1">
              {slides.length &&
                slides.map((slide, i) => (
                  <div
                    className="d-flex align-items-center slide__container"
                    key={i}
                  >
                    <Image
                      src={"/slide-bg.jpg"}
                      alt="background"
                      width={584}
                      height={438}
                    />
                    <div className=" text-white slide__content d-flex flex-column justify-center h-full">
                      <Image
                        src={slide.logo}
                        alt="logo"
                        width={70}
                        height={51}
                        className="mb-2"
                      />
                      <div className="pagination"></div>
                      <p className="fs-4">{slide.text}</p>
                      <p>{slide.source}</p>
                    </div>
                  </div>
                ))}
            </Slider> */}
          </div>{" "}
          <div className="slides-bg position-absolute d-none d-lg-block">
            <img src={"/slide-vector.svg"} alt="vector" />
          </div>
        </div>
        <div className="section--events">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Upcoming Events</h2>
            <div className="d-flex align-items-center view-all__container">
              <p className="view-all mb-0">VIEW ALL</p>
              <Image
                src={"icon-arrow-red.svg"}
                alt="arrow"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={`d-flex flex-column flex-lg-row content__container`}>
            <Image
              src={"/img-upcoming.png"}
              alt="events"
              width={381}
              height={381}
              className="image--upcoming"
            />
            <div>
              {events.length &&
                events.map((event, i) => (
                  <div className={`content`} key={i}>
                    <div className="event__category">
                      <p className="event__type">{event.type}</p>
                      <p className="event__date">{event.date}</p>
                    </div>
                    <div className="event__title">
                      <p className="fs-4">{event.title}</p>
                    </div>
                    <Image
                      src={"icon-arrow-red.svg"}
                      alt="arrow"
                      width={25}
                      height={24}
                      className="event__arrow"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div
          className={`text-white d-flex align-items-center position-relative section--learnmore`}
        >
          <div className={`position-relative z-1 content`}>
            <h2 className="tstar-light">Be a Part of Daya Dimensi Indonesia</h2>
            <p className="text-fadewhite">
              Are you the resilient leaders we are searching for? Join Daya
              Dimensi Indonesia to advance your leadership skill and generate
              exceptional leaders across Indonesia at once.
            </p>
            <Link href={"/"} className="text-white">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-2">LEARN MORE</p>
                <Image src={"arrow.svg"} alt="arrow" width={24} height={24} />
              </div>
            </Link>
          </div>
          <div className="overlay"></div>
        </div>
      </main>
    </>
  );
}
