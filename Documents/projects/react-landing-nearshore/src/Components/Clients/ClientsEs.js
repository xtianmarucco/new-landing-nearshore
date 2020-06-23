import React from 'react';
import ross from './ross.png' ;
import darlene from './darlene.png' ;
import lindsay from './lindsay.png' ;
import stars from './stars.png' ;

import './Clients.css';


const Clients = props =>(
 
    <section id="clients">
        <div className="container">
            <div className="row">
                <div className="intro-title container col-lg-10 col-md-10 col-xs-10 col-sm-10 text-center">
                    <h1> La opinión de nuestros clientes</h1>
                    <br/>
                    <br/>
                    
               
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <div className="client-card container col-md-10 col-xs-12 ">
                        <div className="profile-row">
                            <div className="img-container">
                            <img className="img-fluid" src={lindsay} alt="meet" />

                            </div>
                            <div className="data-container text-left">
                                <div className="client-name">
                                    <h4> Lindsay Insco</h4>
                                </div>
                                <div className="client-position">
                                    <h6>Millenium Digital Technologies</h6>
                                </div>
                            </div>
                            <div className="rating">
                            <img className="img-fluid" src={stars} alt="meet" />
                            </div>
                        </div>

                        <div className="client-testimony text-left ">
                            <p>Lead Developer</p>
                            <p>El equipo de Devlights ha sido de gran ayuda, los considero casi familia. Amplia experiencia y conocimientos técnicos, siempre tienen el personal adecuado para encarar cualquier tipo de proyecto. Incluirlos en proyectos a largo plazo fue una excelente decisión.</p>
                        </div>

                    </div>
                        </div>
                        <div class="carousel-item">
                        <div className="client-card container col-md-10 col-xs-12 ">
                        <div className="profile-row">
                            <div className="img-container">
                            <img className="img-fluid" src={ross} alt="meet" />

                            </div>
                            <div className="data-container text-left">
                                <div className="client-name">
                                    <h4>Ross Forsyth </h4>
                                </div>
                                <div className="client-position">
                                    <h6>Human design</h6>
                                </div>
                            </div>
                            <div className="rating">
                            <img className="img-fluid" src={stars} alt="meet" />
                            </div>
                        </div>

                        <div className="client-testimony text-left ">
                            <p>Director of technology</p>
                            <p>Devlights es un gran equipo con el cual trabajar, no solo tienen las habilidades para realizar el trabajo, sino que también se comunican de manera efectiva a lo largo de todo el proyecto. ¡Su equipo era exactamente lo que necesitaba!</p>
                        </div>

                    </div>
                        </div>
                        <div class="carousel-item">
                        <div className="client-card container col-md-10 col-xs-12">
                        <div className="profile-row">
                            <div className="img-container">
                            <img className="img-fluid" src={darlene} alt="meet" />

                            </div>
                            <div className="data-container text-left">
                                <div className="client-name">
                                    <h4> Darlene Liebman</h4>
                                </div>
                                <div className="client-position">
                                    <h6>Creative Humans</h6>
                                </div>
                            </div>
                            <div className="rating">
                            <img className="img-fluid" src={stars} alt="meet" />
                            </div>
                        </div>

                        <div className="client-testimony text-left ">
                            <p>Fundadora</p>
                            <p> Trabajar con el equipo de Devlights ha sido una gran experiencia. El equipo tiene los conocimientos, responde y son muy amables. Realmente los recomiendo para cualquier tipo de proyecto ya sea grande o pequeño.</p>
                        </div>

                    </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>

                </div>
                                






            </div>
        </div>
    </section>

);
export default Clients;