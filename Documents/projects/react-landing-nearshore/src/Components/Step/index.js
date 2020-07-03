import React from "react";
import "./styles.scss";

const Step = ({
  title,
  number,
  image,
  direction = "default",
  className = "",
}) => {
  return (
    <div className={`step-item ${className} ${direction}`}>
      <div className="step-text">{title}</div>
      <div className="step-number">
        <span>{number}</span>
      </div>
      <div className="step-image">
        <img className="img-fluid" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Step;
