import React from "react";
import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import PrimulProiect from "../../images/mapare_bloc/bloc_map.png";
import AlDoileaProiect from "../../images/alte_proiecte/gemenii/Optimized-aici.jpg";
import { useHistory } from "react-router-dom";
import "./Proiecte.scss";

const SelectionPage = () => {
  let history = useHistory();
  const ref = useRef();
  return (
    <>
      <div className="selection-container">
        <Flippy
          flipOnHover={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={ref} // to use toggle method like ref.curret.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{ width: "100%", height: "500px" }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundPosition: "center",
              backgroundImage: `url(${PrimulProiect})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="card-container-front">
              <h1>Selectati Proiectul 1</h1>
            </div>
          </FrontSide>
          <BackSide style={{}}>
            <h1>Nume Proiect 1</h1>
            <p>Strada : Stefan cel mare 2 3 C</p>
            <button
              className="colored"
              onClick={() => {
                history.push("/scara");
              }}
            >
              Spre Proiect
            </button>
          </BackSide>
        </Flippy>

        <Flippy
          flipOnHover={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={ref} // to use toggle method like ref.curret.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{ width: "100%", height: "500px" }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundImage: `url(${AlDoileaProiect})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="card-container-front">
              <h1>Selectati Proiectul 2</h1>
            </div>
          </FrontSide>
          <BackSide style={{}}>
            <h1>Nume Proiect 2</h1>
            <p>Strada : Stefan cel mare 2 3 C</p>
            <button
              className="colored"
              onClick={() => {
                history.push("/scara");
              }}
            >
              Spre Proiect
            </button>
          </BackSide>
        </Flippy>
      </div>
    </>
  );
};

export default SelectionPage;
