import React from "react";
import "./Partnership.scss";

const Partnership = (props) => (
  <section id="partnership">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>¡Trabajemos juntos en su proximo proyecto!</h1>

          <p style={{ fontFamily: "open sans" }}>
            Destacamos del resto porque es capaz de ofrecer soluciones de
            software END-TO-END a todos sus clientes. Contamos con un calificado
            staff de profesionales que es capaz de enfrentar cualquier tipo de
            desafío técnico. El cliente pone los requerimientos, nosotros la
            solución.
          </p>

          <a className="partner-btn container" href="#connectionsection">
            Contanos más sobre tu proyecto
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Partnership;
