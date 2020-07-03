import React from "react";
import "./WhyHiring.scss";
import Marker from "./../Marker";
import services from "./services.png";

const whyhiring = (props) => (
  <section id="WhyHiring">
    <div className="container">
      <div className="row">
        <div className="intro-title col-12 col-sm-12 col-md-6 align-self-center">
          <h1 className="mb-4 p-relative">
            <Marker />
            ¿Por qué contratar nuestros servicios?
          </h1>
          <p>
            Podemos ofrecerle mano de obra especializada en cada tecnología del
            mercado.
            <br />
            No importa que busque Demandware developers, diseñadores,
            desarrolladores móviles, o project managers, haremos nuestro mejor
            esfuerzo para que se cumpla con sus requerimientos y ofrecerle el
            personal que necesita.
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
