import React from "react";
import "./Partnership.css";

const partnership = (props) => (
  <section id="partnership">
    <div className="container">
      <div className="row">
        <div className="intro-title container col-lg-10 col-md-10 col-xs-10 col-sm-10 text-center">
          <h1> Let's partner up on your next project!</h1>
          <br />
          <br />
          <p>
            Devlights stands out from the rest because is capable to offer
            END-TO-END software development solutions to their clients. We count
            on a qualified team of professionals entirely dedicated to working
            on our clients’ technology projects. You Provide the specifitacions,
            we provide a software solution.
          </p>
          <br />
          <br />
          <a
            className="partner-btn container col-sm-8"
            href="#connectionsection"
          >
            <h3>Tell us more about your project</h3>
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default partnership;
