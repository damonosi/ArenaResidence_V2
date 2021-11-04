import React from "react";

import "./ParteneriPage.scss";
import animationData from "./business-team.json";
import Barrier from "../../images/parteneri/Barrier_Bistrita2-min.png";
import Porotherm from "../../images/parteneri/Porotherm2-min.png";
import Rehau from "../../images/parteneri/Rehau-Logo-min.jpg";
import Scheider from "../../images/parteneri/schneider-electric-vector-logo-min.png";
import Lottie from "react-lottie";

const ParteneriPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      perserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container">
      <div className="up-container">
        <div className="left-top-container">
          <h1 className="text-content">PARTENERI</h1>
          <p className="text-content-2">
            Eat imagine you chiefly few end ferrars complete. Be visitor females
            am ferrars inquiry. Latter law remark two lively thrown. Spot set
            they know rest its.
          </p>
        </div>
        <div className="right-contact">
          <Lottie options={defaultOptions} height={400} width={400}></Lottie>
        </div>
      </div>

      <div className="Biggest-container">
        <div className="big-box">
          <div className="box-1">
            <div className="style-boxing-1">
              <img src={Barrier} alt="barrier logo" />
            </div>
            <div className="style-boxing-2">
              <h1 className="header-text">BARRIER</h1>
              <p className="text">
                Profesioniștii Barrier sunt alături de tine din prima clipă și
                îți oferă soluții personalizate, simple și fiabile pentru
                spațiul pe care ti-l doresti.
              </p>
              <div className="btn-1">
                <a href="http://www.barrier.ro/">Afla mai multe &rarr;</a>
              </div>
            </div>
          </div>

          <div className="box-2">
            <div className="style-boxing-1">
              <img src={Porotherm} alt="porotherm" />
            </div>
            <div className="style-boxing-2">
              <h1 className="header-text">POROTHERM</h1>
              <p className="text">
                {" "}
                Porotherm 36.5 TermoPlus este un bloc ceramic slefuit cu
                insertii de vata minerala bazaltica, realizat in fabricile din
                Germania din material durabil.
              </p>
              <div className="btn-1">
                <a href="http://www.wienerberberger.ro/">
                  Afla mai multe &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="big-box2">
          <div className="box-3">
            <div className="style-boxing-1">
              <img className="rehau" src={Rehau} alt="rehau" />
            </div>
            <div className="style-boxing-2">
              <h1 className="header-text">REHAU</h1>
              <p className="text">
                REHAU - specialist în soluții pe bază de polimeri în sectoarele
                construcțiilor, auto și industrial, cu peste 20.000 de angajați
                în întreaga lume.
              </p>
              <div className="btn-1">
                <a href="http://www.rehau.ro/">Afla mai multe &rarr;</a>
              </div>
            </div>
          </div>
          <div className="box-4">
            <div className="style-boxing-1">
              <img src={Scheider} alt="schneider" />
            </div>
            <div className="style-boxing-2">
              <h1 className="header-text">SCHNEIDER</h1>
              <p className="text">
                Scopul Schneider Electric este de a le oferi tuturor mijloacele
                necesare pentru a beneficia de energia si resursele noastre,
                respectand normele.
              </p>

              <div className="btn-1">
                <a href="http://www.se.com/">Afla mai multe &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParteneriPage;
