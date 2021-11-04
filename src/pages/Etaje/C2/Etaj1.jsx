import React from "react";

import C2Etaj1 from "../../../components/map/Etaje/C2/Etaj1";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
import "../Etaj.scss";
const C2_Etaj1 = () => {
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
              <div className="texter">
                <h1>
                  SELECTATI <br /> APARTAMENTUL <br /> DORIT <br /> Etaj 1{" "}
                  <br />
                  Scara C2
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
                  <C2Etaj1 />
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
export default C2_Etaj1;
