import React from "react";

import companyLogo from "../../images/logoCladire.png";
import "./footer.styles.scss";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={companyLogo} alt="logo" />
        </div>
        <div className="footer-logo-divider"></div>

        <div className="social-holder">
          <a href="https://www.facebook.com/arenaresidencebacau">
            <span className="fa fa-facebook"></span>
          </a>
          <a href="https://www.instagram.com/arena_residence_bacau/">
            <span className="fa fa-instagram"></span>
          </a>
          <a href="https://wa.me/+400727339499">
            <span className="fa fa-whatsapp"></span>
          </a>
          <a href="mailto:office.arenaresidence@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
      <p>Copyright Arena Residence &copy; 2021</p>
    </footer>
  );
};

export default Footer;
