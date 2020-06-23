import React from 'react';
import team from './team.png' ;
import './Team.css';


const Clients = props =>(
 
    <section id="Team">
        <div className="container">
            <div className="row">
                <div className="intro-title container col-lg-10 col-md-10 col-xs-10 col-sm-10 text-center">
                    <h1> Conoce al equipo</h1>
                    <br/>
                    <br/>
                    <div className="img-container">
                     <img className="img-fluid" src={team} alt="meet" />

                    </div>
                          
                </div>
              
            </div>
        </div>

    </section>

);
export default Clients;