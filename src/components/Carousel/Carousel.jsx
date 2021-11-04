import React from "react";

import BarrierLogo from "../../images/parteneri/barrier.svg";
import Schneider from "../../images/parteneri/Scheider.svg";
import Porotherm from "../../images/parteneri/Porotherm2.svg";
import Rehau from "../../images/parteneri/Rehau.svg";
import "./Carousel.scss";
function ControlledCarousel() {
  return (
    <div className="container-parteneri">
      <img src={BarrierLogo} alt="" />
      <img src={Schneider} alt="" />
      <img src={Porotherm} alt="" />
      <img src={Rehau} alt="" />
    </div>
  );
}

export default ControlledCarousel;
