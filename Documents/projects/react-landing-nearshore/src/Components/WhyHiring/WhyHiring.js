import React from "react";
import "./WhyHiring.scss";
import Marker from "./../Marker";
import services from "./services.png";

const whyhiring = (props) => (
  <section id="WhyHiring">
    <div className="container">
      <div className="row">
        <div className="intro-title col-12 col-sm-12 col-md-6  align-self-center">
          <h1 className="mb-4 p-relative">
            <Marker />
            Why hiring our services
          </h1>
          <p>
            We can provide and source for every technology available within the
            market.
            <br />
            Whether you require demandware developers, designers, mobile
            developers or project managers, we will put our best to make sure
            that your requirements are met and that you find the talent that you
            need for your team.
          </p>
        </div>

        <div className="intro-title col-12 col-sm-12 col-md-6">
          <img className="img-fluid" src={services} alt="office" />
        </div>
      </div>
    </div>
  </section>
);
export default whyhiring;
