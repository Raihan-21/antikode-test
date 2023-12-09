import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = ({ textColor = "white" }: { textColor?: string }) => {
  const router = useRouter();
  return (
    <div
      className={`mx-4 my-4 position-absolute top-0 start-0 end-0  d-flex justify-content-between align-items-center z-2 text-${textColor} ${styles.navbar}`}
    >
      <Image src={"/logo.png"} alt="logo" width={160} height={50} />
      <div className={`d-flex ${styles.menuContainer}`}>
        <Link
          href={"/"}
          className={`position-relative ${
            router.pathname === "/" ? styles.activeMenu : ""
          }`}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={`position-relative ${
            router.pathname === "/about" ? styles.activeMenu : ""
          }`}
        >
          About
        </Link>
        <Link
          href={"/"}
          className={`position-relative ${
            router.pathname === "/expertise" ? styles.activeMenu : ""
          }`}
        >
          Expertise
        </Link>
        <Link
          href={"/"}
          className={`position-relative ${
            router.pathname === "/asd" ? styles.activeMenu : ""
          }`}
        >
          Program
        </Link>
        <Link
          href={"/"}
          className={`position-relative ${
            router.pathname === "/asd" ? styles.activeMenu : ""
          }`}
        >
          Odyssey
        </Link>
        <Link
          href={"/"}
          className={`position-relative ${
            router.pathname === "/das" ? styles.activeMenu : ""
          }`}
        >
          News
        </Link>
        <Link
          href={"/"}
          className={`position-relative ${
            router.pathname === "/as" ? styles.activeMenu : ""
          }`}
        >
          Contact
        </Link>
        <Link
          href={"/"}
          className={`position-relative ${
            router.pathname === "/da" ? styles.activeMenu : ""
          }`}
        >
          Career
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
