import React from "react";
import "./IntroSection.css";
import Calendly from "../Calendly/Calendly";

const intro = (props) => (
  <section id="intro">
    <div className="container">
      <div className="row">
        <div className="intro-title col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <h1>Nearshore Software development services</h1>
          <br />
          <br />
          <h4> We connnect our clients with their products</h4>
          <br />
          <br />

          <Calendly>Schedule a FREE APPOINTMENT</Calendly>

          <br />
        </div>
      </div>
    </div>
  </section>
);
export default intro;
