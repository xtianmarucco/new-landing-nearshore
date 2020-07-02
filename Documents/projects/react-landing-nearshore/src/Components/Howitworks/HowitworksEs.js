import React from "react";
import "./Howitworks.scss";
import meet from "./meet-up.png";
import planning from "./planning.png";
import team from "./team-up.png";
import Step from "./../Step";
import Steps from "./../Steps";

const stepsData = [
  {
    id: 1,
    number: 1,
    title:
      "Nos reunimos con el cliente para escuchar su idea y trabajarla juntos.",
    image: meet,
  },
  {
    id: 2,
    number: 2,
    title:
      "Ponemos a disposición nuestro plantel de profesionales y seleccionamos los perfiles que mejor se adapten a los requerimientos del cliente.",
    image: planning,
    direction: "reverse",
  },
  {
    id: 3,
    number: 3,
    title:
      "Armamos un equipo acorde, los empapamos en los detalles y lo preparamos para que comiencen a trabajar.",
    image: team,
  },
];

const Howitworks = (props) => {
  return (
    <section id="howitworks">
      <div className="container">
        <div className="row">
          <div className="col-12 col-title">
            <h3>¿Cómo funciona?</h3>
          </div>

          <div className="col-12">
            <Steps>
              {stepsData.map(({ title, number, image, direction, id }) => (
                <Step
                  title={title}
                  number={number}
                  image={image}
                  direction={direction}
                  key={id}
                />
              ))}
            </Steps>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
