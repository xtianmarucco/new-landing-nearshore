import React from 'react';
import benefits1 from './benefits1.png';
import benefits2 from './benefits2.png';
import benefits3 from './benefits3.png';
import './Benefits.css';


const Benefits = props =>(
 
    <section id="benefits">
        <div className="container">
        <h1 className="text-center">Space Benefits Summary</h1>
            <div className="row flex-grid benefits-container">

                
                <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
                <img className="img-fluid" src={benefits1} alt="office" />
                <br/>
                <br/>
                <br/>
                <h4> HELLO WORLD </h4>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus quibusdam debitis cum tempora nesciunt!</p>
                </div>
                <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
                <img className="img-fluid" src={benefits2} alt="office" />
                <br/>
                <br/>
                <br/>
                <h4> HELLO WORLD </h4>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus quibusdam debitis cum tempora nesciunt!</p>
                </div>
        
                <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
        
                <img className="img-fluid" src={benefits3} alt="office" />
                <br/>
                <br/>
                <br/>
                <h4> HELLO WORLD </h4>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus quibusdam debitis cum tempora nesciunt!</p>

                </div>
              
               
            </div>
        </div>




    </section>

);
export default Benefits;