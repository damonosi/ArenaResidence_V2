import React from "react";

import AlegeScara from "../../components/map/AlegeScara";
import "./ImagePage.styles.scss";

import ParteneriPage from "../Parteneri/ParteneriComponent";

const ImagePage = () => {
  return (
    <div className="containing">
      <div className="image-container">
        <AlegeScara />
      </div>
      <div className="more-container">
        <div className="banner-container">
          <ParteneriPage />
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
