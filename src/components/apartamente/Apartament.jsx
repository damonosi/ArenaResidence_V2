import React from "react";
import { useParams } from "react-router-dom";
import { Data_c1 } from "./data.js";
import "./Apartament.scss";
import { FaWhatsapp } from "react-icons/fa";

const Apartament = () => {
  const { id } = useParams();

  return (
    <div className="contain">
      <div className="apartament">
        {Data_c1
          // eslint-disable-next-line eqeqeq
          .filter((apartament) => apartament.id == id)
          .map((filteredApartment) => (
            <div className="produs">
              <h1 className="title-apartament">{filteredApartment.title}</h1>
              <div className="fler">
                <div className="info-apartament">
                  <div className="plan-detaliat">
                    <img src={filteredApartment.src} alt="plan detaliat" />
                  </div>
                  <h4>Apartament cu {filteredApartment.camere} camere</h4>
                  <h8>{filteredApartment.descriere}</h8>
                  <p className="firstt">Etajul : {filteredApartment.etaj}</p>
                  <p>Scara : {filteredApartment.scara}</p>
                  <p>
                    Suprafata Construita :{" "}
                    {filteredApartment.suprafataConstruita}
                  </p>
                  <p>Suprafata Utila : {filteredApartment.suprafataUtila}</p>
                  <p>Balcon : {filteredApartment.balcon}</p>
                  <p>Numar de Contact : 0727.339.499</p>
                  <div className="button-container">
                    <a
                      className="wapp-button"
                      href="https://wa.me/+400727339499"
                    >
                      <button>
                        <FaWhatsapp /> SUNATI
                      </button>
                    </a>
                    <a className="wapp-button" href={filteredApartment.href}>
                      <button>INTRĂ ÎN APARTAMENT</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Apartament;
