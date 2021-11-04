import React from "react";

import C1Etaj2 from "../../../components/map/Etaje/C1/Etaj2";

import "../Etaj.scss";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
const C1_Etaj2 = () => {
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
              <div className="texter">
                <h1>
                  SELECTATI <br /> APARTAMENTUL <br /> DORIT <br /> Etaj 2{" "}
                  <br />
                  Scara C1
                </h1>
              </div>
              <div class="arrow bounce">
                <h2>apasa pe sageata</h2>
                <a class="fa fa-arrow-down fa-2x" href="#canvas-container">
                  {" "}
                </a>
              </div>
              <div className="padder">
                <div className="canvas-container" id="canvas-container">
                  <C1Etaj2 />
                </div>
              </div>

              <div className="distance"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="more-container ">
        <div className="banner-container ">
          <ParteneriPage />
        </div>
      </div>
    </div>
  );
};
export default C1_Etaj2;
