import React from "react";
import "./IntroSection.scss";
import Calendly from "../Calendly/Calendly";

const intro = (props) => (
  <section id="intro">
    <div className="container">
      <div className="row">
        <div className="intro-title col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <h1 className="mb-3">Nearshore Software development services</h1>
          <h4 className="mb-5"> We connnect our clients with their products</h4>

          <Calendly>Schedule a FREE APPOINTMENT</Calendly>
        </div>
      </div>
    </div>
  </section>
);
export default intro;
