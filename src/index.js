import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import AlertTemplate from "react-alert-template-basic";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "-110px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />{" "}
        </AlertProvider>
      </ParallaxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
