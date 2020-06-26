import React from 'react';
import meet from './meet-up.png' ;
import planning from './planning.png' ;
import team from './team-up.png' ;
import './Howitworks.css';


const howitworks = props =>(
 
    <section id="howitworks">
        <div className="container">
            <div className="row ">
                <div className="intro-title text-center container col-lg-12 col-md-6 col-xs-12 col-sm-12 text-center">
                    <h2 className="title-section"> How does it work?</h2>
                    <br/>
                    <br/>


                
                <div className="row row-fullwidth">

                 <div className="text-step col-md-5"> <p>We meet with the client to brief about his idea and work it out togheter.</p></div>
                 <div className="number-step text-center col-md-2"><h1>1</h1></div>
                 <div className="img-step col-md-5">  
                 <img className="img-fluid" src={meet} alt="meet" />
                </div>
                </div>

                <div className="row row-fullwidth">

                 <div className="img-step col-md-5">  
                 <img className="img-fluid" src={planning} alt="meet" />
                </div>
                 <div className="number-step text-center col-md-2"><h1>2</h1></div>
                 <div className="text-step col-md-5"> <p>We team up the assets for your project and then they are ready to dig into the details and start working.</p></div>
                </div>

                <div className="row row-fullwidth">

                 <div className="text-step col-md-5"> <p>Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.</p></div>
                 <div className="number-step text-center col-md-2"><h1>4</h1></div>
                 <div className="img-step col-md-5">  
                 <img className="img-fluid" src={team} alt="meet" />
                </div>
                </div>

            </div>
            </div>
            <div className="container mobile-view ">
                <div className="row row-mobile">
                <div className="number-step text-center col-md-1"><h1>1</h1></div>
                <div className="text-step col-md-5"> <p>Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.</p></div>

                </div>
                <div className="img-step text-center">  
                <img className="img-fluid" src={meet} alt="meet" />
                </div>

                <div className="row row-mobile">
                <div className="number-step text-center col-md-1"><h1>2</h1></div>
                <div className="text-step "> <p>Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.</p></div>

                </div>
                <div className="img-step text-center">  
                <img className="img-fluid" src={planning} alt="meet" />
                </div>

                <div className="row row-mobile">
                <div className="number-step text-center col-md-1"><h1>3</h1></div>
                <div className="text-step col-md-5"> <p>Lorem doloremque ab quos ratione fugiat saepe veniam qui recusandae.</p></div>

                </div>
                <div className="img-step text-center">  
                <img className="img-fluid" src={team} alt="meet" />
                </div>

            </div>
                    

                
        </div>




    </section>




);
export default howitworks;