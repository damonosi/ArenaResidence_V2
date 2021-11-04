import React from "react";

import RoundImage1 from "../../images/hol.jpg";
import companyLogo from "../../images/logoCladire.png";
import "./About.styles.scss";

import ParallaxImage from "./../../components/Parallax/ParralaxImage";
import { Link } from "react-router-dom";
import { Responsive } from "../../responsiveComponent/Responsive";
const AboutPage = () => {
  return (
    <div className="about-container ">
      <Responsive displayIn={["Laptop"]}>
        <ParallaxImage
          y={[-25, 15]}
          height={800}
          width={3800}
          src={RoundImage1}
        />
      </Responsive>

      <Responsive displayIn={["Mobile"]}>
        <img
          height={450}
          width={1000}
          y={[-10, 10]}
          alt="About"
          src={RoundImage1}
        />
      </Responsive>

      <div className="half-left">
        <div className="img-holder">
          <img src={companyLogo} alt="Arena Residence" />
        </div>

        <p>
          NOUL ANSAMBLU RESIDENTIAL – ARENA RESIDENCE este proiectul imobiliar
          care creste in cea mai exclusivista zona a Bacaului. Un bloc de 7
          etaje + 8 retras cu doua tronsoane distincte ce reunesc peste 98 de
          apartamente
        </p>

        <Link className="colored" to="/scara">
          ALEGETI SCARA &rarr;
        </Link>

        <br />
      </div>
    </div>
  );
};

export default AboutPage;
