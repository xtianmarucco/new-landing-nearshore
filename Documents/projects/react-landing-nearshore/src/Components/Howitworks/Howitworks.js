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
      "We meet with the client to brief about his idea and work it out togheter.",
    image: meet,
  },
  {
    id: 2,
    number: 2,
    title:
      "We team up the assets for your project and then they are ready to dig into the details and start working.",
    image: planning,
    direction: "reverse",
  },
  {
    id: 3,
    number: 3,
    title:
      "Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.",
    image: team,
  },
];

const Howitworks = (props) => {
  return (
    <section id="howitworks">
      <div className="container">
        <div className="row">
          <div className="col-12 col-title">
            <h3>How does it work?</h3>
          </div>

          <div className="col-12 ">
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
