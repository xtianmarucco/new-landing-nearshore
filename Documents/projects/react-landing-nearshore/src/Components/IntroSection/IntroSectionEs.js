import React from "react";
import "./IntroSection.scss";
import Calendly from "../Calendly/Calendly";

const introEs = (props) => (
  <section id="intro">
    <div className="container">
      <div className="row">
        <div className="intro-title col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <h1 className="mb-3"> Servicios de desarrollo Nearshore </h1>
          <h4 className="mb-5"> Conectamos al cleinte con su producto</h4>
          <Calendly>Agenda una reunión SIN COMPROMISO</Calendly>
        </div>
      </div>
    </div>
  </section>
);

export default introEs;
