import React from 'react';
import './WhyHiring.css';
import office from './section2right.png';


const whyhiring = props =>(
 
    <section id="WhyHiring">
        <div className="container">
            <div className="row">
                <div className="intro-title col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <h1> Why hiring our services</h1>
                    <br/>
                    <br/>
                    <p>We can provide and source for every technology available within the market. 
                        Whether you require demandware developers,
                        designers, mobile developers or project managers, 
                        we will put our best to make sure that your requirements are met and that you 
                        find the talent that you need for your team.</p>
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