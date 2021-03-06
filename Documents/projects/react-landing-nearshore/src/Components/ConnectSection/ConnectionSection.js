import React from "react";
import MainForm from "../MainForm/MainForm";

import "./ConnectionSection.css";

const connect = (props) => (
  <section id="connectionsection">
    <div
      className="container"
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <div className="row flex-grid">
        <div className="col-12 col-lg-6 text-connect">
          <h1>We connect our clients with their products</h1>
          <br />
          <p>
            We make things happen here at Devlights. Our outsourcing solutions
            provides clients access to a vast pool of talent Staffing the
            talents to build a team is essential for the success of any
            business, but to be efficient it requires devoting significant
            resources to the process. However, sometimes the budget or time
            frames are tight, or the company might simply need a full-time
            remote talent to do a specific job. In this case,
            staffing-as-a-service is the way to go in such a case. DEVLIGHTS is
            capable of providing highly-skilled specialists short-term and
            long-term IT staffing projects built to your specification and for a
            fraction of the cost.
          </p>
        </div>

        <div className="col-12 col-lg-6 text-center form-connect">
          <div className="form-container">
            <div className="col-sm-12  text-center">
              <h1 style={{ color: "#10b5e9" }}>Let's get in touch</h1>
              <br />
              <MainForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default connect;
