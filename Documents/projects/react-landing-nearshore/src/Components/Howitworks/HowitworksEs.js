import React from 'react';
import meet from './meet-up.png' ;
import planning from './planning.png' ;
import team from './team-up.png' ;
import './Howitworks.css';


const howitworksEs = props =>(
 
    <section id="howitworks">
        <div className="container">
            <div className="row">
                <div className="intro-title container col-lg-12 col-md-6 col-xs-12 col-sm-12 text-center">
                    <h1> How does it work?</h1>
                    <br/>
                    <br/>



                <div className="row">

                 <div className="text-step col-md-5"> <p>Nos reunimos con el cliente para escuchar su idea y trabajarla juntos.</p></div>
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
                 <div className="text-step col-md-5"> <p>Ponemos a disposición nuestro plantel de profesionales y seleccionamos los perfiles que mejor se adapten a los requerimientos del cliente.</p></div>
                </div>

                <div className="row">

                 <div className="text-step col-md-5"> <p>Armamos un equipo acorde, los empapamos en los detalles y lo preparamos para que comiencen a trabajar.</p></div>
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
export default howitworksEs;