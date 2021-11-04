import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxImage = ({ src, height, width, y, x }) => (
  <Parallax className="custom-class" x={x} y={y} tagOuter="figure">
    <img width={width} height={height} src={src} alt="" />
  </Parallax>
);

export default ParallaxImage;
