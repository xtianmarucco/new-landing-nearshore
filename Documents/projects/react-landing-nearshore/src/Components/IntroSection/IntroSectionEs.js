import React from "react";
import "./IntroSection.css";

import Calendly from "../Calendly/Calendly";

const introEs = (props) => (
  <section id="intro">
    <div className="container">
      <div className="row">
        <div className="intro-title col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <h1> Servicios de desarrollo Nearshore </h1>
          <br />
          <br />
          <h4> Conectamos al cleinte con su producto</h4>
          <br />
          <br />
          <Calendly>Agenda una reunión SIN COMPROMISO</Calendly>
          <br />
        </div>
      </div>
    </div>
  </section>
);
export default introEs;
