import React from 'react';
import meet from './meet-up.png' ;
import planning from './planning.png' ;
import team from './team-up.png' ;
import './Howitworks.css';


const howitworks = props =>(
 
    <section id="howitworks">
        <div className="container">
            <div className="row">
                <div className="intro-title container col-lg-12 col-md-6 col-xs-12 col-sm-12 text-center">
                    <h1> How does it work?</h1>
                    <br/>
                    <br/>



                <div className="row">

                 <div className="text-step col-md-5"> <p>Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.</p></div>
                 <div className="number-step text-center col-md-2"><h1>4</h1></div>
                 <div className="img-step col-md-5">  
                 <img className="img-fluid" src={meet} alt="meet" />
                </div>
                </div>

                <div className="row">

                 <div className="img-step col-md-5">  
                 <img className="img-fluid" src={planning} alt="meet" />
                </div>
                 <div className="number-step text-center col-md-2"><h1>4</h1></div>
                 <div className="text-step col-md-5"> <p>Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.</p></div>
                </div>

                <div className="row">

                 <div className="text-step col-md-5"> <p>Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.</p></div>
                 <div className="number-step text-center col-md-2"><h1>4</h1></div>
                 <div className="img-step col-md-5">  
                 <img className="img-fluid" src={team} alt="meet" />
                </div>
                </div>


                
            


            </div>
            </div>
                    

                
        </div>




    </section>




);
export default howitworks;