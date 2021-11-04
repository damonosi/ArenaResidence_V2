import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";

import useImage from "use-image";
import LaptopImage from "../../../../images/plan_etaje/c1/plan_8.png";

import Ap1 from "../../Apartamente/C1/Et8/Ap1";
import Ap2 from "../../Apartamente/C1/Et8/Ap2";
import Ap3 from "../../Apartamente/C1/Et8/Ap3";
import Ap4 from "../../Apartamente/C1/Et8/Ap4";

import "./Ejaje.scss";
const C1Etaj8 = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });

  function debounce(fn, ms) {
    let timer;

    return (_) => {
      clearTimeout(timer);

      timer = setTimeout((_) => {
        timer = null;

        fn.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,

        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const stageRef = useRef();

  var sceneWidth = 2600;
  var sceneHeight = 3820;

  useEffect(() => {
    function fitStageIntoParentContainer() {
      var container = document.querySelector("#map-container");
      const stage = stageRef.current;
      // now we need to fit stage into parent container
      var containerWidth = container.offsetWidth;

      // but we also make the full scene visible
      // so we need to scale all objects on canvas
      var scale = containerWidth / sceneWidth;

      stage.width(sceneWidth * scale);
      stage.height(sceneHeight * scale);
      stage.scale({ x: scale, y: scale });
    }

    fitStageIntoParentContainer();

    window.addEventListener("resize", fitStageIntoParentContainer);
  }, [sceneHeight, sceneWidth]);
  let history = useHistory();

  const handleClick2 = () => {
    history.push("/apartamente/43");
    history.go(0);
  };

  const handleTouch = () => {
    setTimeout(() => {
      history.push("/apartamente/43");
    }, 1200);
  };
  const handleClick = () => {
    history.push("/apartamente/44");
    history.go(0);
  };

  const handleTouch2 = () => {
    setTimeout(() => {
      history.push("/apartamente/44");
    }, 1200);
  };
  const handleClick3 = () => {
    history.push("/apartamente/45");
    history.go(0);
  };

  const handleTouch3 = () => {
    setTimeout(() => {
      history.push("/apartamente/45");
    }, 1200);
  };
  const handleClick4 = () => {
    history.push("/apartamente/46");
    history.go(0);
  };

  const handleTouch4 = () => {
    setTimeout(() => {
      history.push("/apartamente/46");
    }, 1200);
  };

  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");

    return <Image image={image} />;
  };

  return (
    <div id="map-container" className="map-container">
      <Stage
        ref={stageRef}
        id="container"
        width={dimensions.width}
        height={dimensions.height}
        label="mapare_bloc"
        // onMouseMove={handleMouseMove}
      >
        <Layer>
          <BuildingImage id="build" />

          <Group onTap={handleTouch} onClick={handleClick2}>
            <Ap1 />
          </Group>
          <Group onTap={handleTouch2} onClick={handleClick}>
            <Ap2 />
          </Group>
          <Group onTap={handleTouch3} onClick={handleClick3}>
            <Ap3 />
          </Group>
          <Group onTap={handleTouch4} onClick={handleClick4}>
            <Ap4 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C1Etaj8;
