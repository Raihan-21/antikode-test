import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-flex justify-content-between">
        <div className="d-flex certification">
          <Image src={"/certified.png"} alt="image" width={35} height={60} />
          <Image src={"/principles.png"} alt="image" width={152} height={60} />
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
                <Image src={"/arrow.svg"} alt="arrow" width={24} height={24} />
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
    </footer>
  );
};

export default Footer;
