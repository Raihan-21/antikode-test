import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = ({ textColor = "white" }: { textColor?: string }) => {
  const router = useRouter();
  return (
    <div
      className={`mx-4 my-4 position-absolute top-0 start-0 end-0  d-flex justify-content-between align-items-center z-2  navbar ${
        textColor === "white" ? "navbar--whitetext" : "navbar--blacktext"
      }`}
    >
      <Image src={"/logo.png"} alt="logo" width={160} height={50} />
      <div className={`d-flex menu__container`}>
        <Link
          href={"/"}
          className={`position-relative navbar__menu ${
            router.pathname === "/" ? "active-menu" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={`position-relative navbar__menu ${
            router.pathname === "/about" ? "active-menu" : ""
          }`}
        >
          About
        </Link>
        <Link
          href={"/"}
          className={`position-relative navbar__menu ${
            router.pathname === "/expertise" ? "active-menu" : ""
          }`}
        >
          Expertise
        </Link>
        <Link
          href={"/"}
          className={`position-relative navbar__menu ${
            router.pathname === "/asd" ? "active-menu" : ""
          }`}
        >
          Program
        </Link>
        <Link
          href={"/"}
          className={`position-relative navbar__menu ${
            router.pathname === "/asd" ? "active-menu" : ""
          }`}
        >
          Odyssey
        </Link>
        <Link
          href={"/"}
          className={`position-relative navbar__menu ${
            router.pathname === "/das" ? "active-menu" : ""
          }`}
        >
          News
        </Link>
        <Link
          href={"/"}
          className={`position-relative navbar__menu ${
            router.pathname === "/as" ? "active-menu" : ""
          }`}
        >
          Contact
        </Link>
        <Link
          href={"/"}
          className={`position-relative navbar__menu ${
            router.pathname === "/da" ? "active-menu" : ""
          }`}
        >
          Career
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
