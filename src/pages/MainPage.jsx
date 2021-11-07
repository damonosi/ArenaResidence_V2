import React from "react";

import AboutPage from "./aboutPage/AboutPage.jsx";
import ParteneriPage from "./Parteneri/ParteneriComponent";
import AlteProiecte from "./alteProiecte/alteProiecte";
import HomePage from "./homePage/HomePage.jsx";
import { Responsive } from "../responsiveComponent/Responsive";
import "./MainPage.styles.scss";
import { Parallax } from "react-scroll-parallax";

const MainPage = () => {
  return (
    <div className="site-wrapper">
      <div id="content" className="site-content center-relative">
        <HomePage />

        <section className="absec">
          <AboutPage />
        </section>

        <section className="alteProiecte-container">
          <div className="sectionare2 ">
            <Responsive displayIn={["Laptop"]}>
              <Parallax x={[-5, 5]}>
                <h1>
                  Proiecte <br /> Finalizate
                </h1>
              </Parallax>
            </Responsive>
            <Responsive displayIn={["Mobile"]}>
              <h1>
                Proiecte <br /> Finalizate
              </h1>
            </Responsive>
          </div>
          <div className="spatiu">
            <AlteProiecte />
          </div>
        </section>
        <section className="parteneri-container">
          <ParteneriPage />
        </section>
      </div>
    </div>
  );
};

export default MainPage;
