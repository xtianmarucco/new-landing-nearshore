import React, { Component } from "react";
import "./Calendly.css";

class Calendly extends Component {
  render() {
    return (
      <div>
        <div id="schedule_form">
          <div className="calendly-inline-widget">
            <a href="https://calendly.com/devlights/30min ">
              Schedule a FREE APPOINTMENT
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Calendly;

// const calendly = props =>(

//     <div>hola</div>

// );
// export default calendly;
