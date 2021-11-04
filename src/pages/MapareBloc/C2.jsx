import React from "react";
import C2 from "../../components/map/Scari/ScaraC2";

import ParteneriPage from "../Parteneri/ParteneriComponent";
import "./ImagePage.styles.scss";

const ScaraC1 = () => {
  return (
    <div className="containing">
      <div className="image-container">
        <C2 />
      </div>

      <div className="more-container ">
        <div className="banner-container ">
          <ParteneriPage />
        </div>
      </div>
    </div>
  );
};

export default ScaraC1;
