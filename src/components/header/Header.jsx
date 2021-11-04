import React, { useState, useEffect } from "react";
import companyLogo from "../../images/logoCladire.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav className={navbar ? "navbar activete" : "navbar"}>
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <img src={companyLogo} alt="Arena Residence" />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/scara"
            >
              Apartamente
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/parteneri"
            >
              Parteneri
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
