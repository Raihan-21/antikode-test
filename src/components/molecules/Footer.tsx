import Image from "next/image";
import React, { useCallback } from "react";

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <footer className="footer position-relative">
      <div className="section--top">
        <div className="d-flex flex-wrap justify-content-between content__container">
          <div className="d-flex flex-wrap certification">
            <Image src={"/certified.png"} alt="image" width={35} height={60} />
            <Image
              src={"/principles.png"}
              alt="image"
              width={152}
              height={60}
            />
            <Image
              src={"/certification.png"}
              alt="image"
              width={206}
              height={60}
            />
          </div>
          <div className="socmed">
            <Image src={"/facebook.svg"} alt="icon" width={32} height={32} />
            <Image src={"/instagram.svg"} alt="icon" width={32} height={32} />
            <Image src={"/linkedin.svg"} alt="icon" width={32} height={32} />
            <Image src={"/youtube.svg"} alt="icon" width={32} height={32} />
            <Image src={"/twitter.svg"} alt="icon" width={32} height={32} />
          </div>
          <div className="position-relative">
            <p>Subscribe. Join the Community.</p>
            <div className="d-flex">
              <form>
                <input type="text" placeholder="Email" />
                <button className="form__submit">
                  <Image
                    src={"/arrow.svg"}
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </button>
              </form>
            </div>
            <img
              src="/whatsapp.png"
              alt="icon-whatsapp"
              className="position-absolute icon--whatsapp"
            />
          </div>
        </div>
      </div>
      <div className="section--bottom d-flex justify-content-between">
        <p>
          Copyright © 2022 Daya Dimensi Indonesia. Website crafted by Antikode.
        </p>
        <div className="legal d-flex flex-wrap">
          <div>Privacy policy</div>
          <div>|</div>
          <div>Terms & conditions</div>
        </div>
      </div>
      <div
        className="scroll-navigation d-flex justify-content-center align-items-center position-absolute"
        onClick={scrollToTop}
      >
        <Image src={"/arrow.svg"} alt="arrow" width={20} height={20} />
      </div>
    </footer>
  );
};

export default Footer;
