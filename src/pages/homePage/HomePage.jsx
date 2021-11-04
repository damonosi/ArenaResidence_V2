import React from "react";

import "./HomePage.styles.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div id="home" className="section no-page-title">
        <div className="aligning">
          <Link className="colored no-big" to="/scara">
            ALEGETI SCARA &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
