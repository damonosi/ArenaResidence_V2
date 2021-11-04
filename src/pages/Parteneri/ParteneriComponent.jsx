import React from "react";

import "./Parteneri.scss";

import ControlledCarousel from "./../../components/Carousel/Carousel";
const ParteneriComponent = () => {
  return (
    <div id="services" className="services-section backy">
      <div className="carousel-container">
        <ControlledCarousel />
      </div>
    </div>
  );
};

export default ParteneriComponent;
