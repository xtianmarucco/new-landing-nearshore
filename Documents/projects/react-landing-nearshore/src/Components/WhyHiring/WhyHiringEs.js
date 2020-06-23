import React from 'react';
import './WhyHiring.css';
import office from './section2right.png';


const whyhiring = props =>(
 
    <section id="WhyHiring">
        <div className="container">
            <div className="row">
                <div className="intro-title col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <h1> ¿Por qué contratar nuestros servicios?</h1>
                    <br/>
                    <br/>
                    <p>Podemos ofrecerle mano de obra especializada en cada tecnología del mercado. No importa que busque Demandware developers, diseñadores, desarrolladores móviles, o project managers, haremos nuestro mejor esfuerzo para que se cumpla con sus requerimientos y ofrecerle el personal que necesita.</p>
                    <br/>
                    <br/>
              


                </div>
                <div className="intro-title col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <img className="img-fluid" src={office} alt="office" />


                </div>
            </div>
        </div>




    </section>




);
export default whyhiring;