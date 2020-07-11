import React from "react";
import "./Partnership.scss";

const Partnership = (props) => (
  <section id="partnership">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1> Let's partner up on your next project!</h1>
          <p style={{ fontFamily: "open sans" }}>
            Devlights stands out from the rest because is capable to offer
            END-TO-END software development solutions to their clients. We count
            on a qualified team of professionals entirely dedicated to working
            on our clients’ technology projects. You Provide the specifitacions,
            we provide a software solution.
          </p>

          <a className="partner-btn container" href="#connectionsection">
            Tell us more about your project
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Partnership;
