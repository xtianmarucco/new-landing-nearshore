import React from "react";
import benefits1 from "./benefits1.png";
import benefits2 from "./benefits2.png";
import benefits3 from "./benefits3.png";
import "./Benefits.scss";

const Benefits = (props) => (
  <section id="benefits">
    <div className="container">
      <h1 className="text-center">Benefits</h1>
      <div className="row flex-grid benefits-container">
        <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
          <img className="img-fluid" src={benefits1} alt="office" />
          <br />
          <br />
          <br />
          <h4> Great cultural fit and similar time zone. </h4>
          <br />
          <p>
            We look for people with the ability to join to your team easily,
            soft skills are fundamental for us. We can form a new team to take
            charge of an existing project or starting a new one for upcoming
            projects and we are just one hour away from East time.
          </p>
        </div>
        <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
          <img className="img-fluid" src={benefits2} alt="office" />
          <br />
          <br />
          <br />
          <h4>Outstanding rates, transparency and convenience</h4>
          <br />
          <p>
            Clear contract terms and conditions, DEVLIGHTS is capable of
            providing highly-skilled specialists for just a fraction of the cost
            of local talent.
          </p>{" "}
        </div>

        <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
          <img className="img-fluid" src={benefits3} alt="office" />
          <br />
          <br />
          <br />
          <h4> Unleash your potencial, achieve your goals</h4>
          <br />
          We do care about long-term relationships with clients. This is a core
          value at Devlights. We strive to create strong relationships and work
          together with our clients to help them succeed in the long term.
        </div>
      </div>
    </div>
  </section>
);
export default Benefits;
