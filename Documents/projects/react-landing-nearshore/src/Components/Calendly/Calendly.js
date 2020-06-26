import React, { Component} from "react";
import './Calendly.css';

class Calendly extends Component {

  render (){
    return (
      <div>
        <div id="schedule_form">
          <div class="calendly-inline-widget"  >
          <a href="https://calendly.com/devlights/30min " onclick="Calendly.initPopupWidget({url: 'https://calendly.com/devlights/30min'});return false;">Schedule a FREE APPOINTMENT</a>          </div>
        </div>
      </div>
    );
  }
};

export default Calendly;


// const calendly = props =>(
 
//     <div>hola</div>

// );
// export default calendly;
