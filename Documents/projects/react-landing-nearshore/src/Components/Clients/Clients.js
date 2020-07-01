import React from "react";
import ross from "./ross.png";
import darlene from "./darlene.png";
import lindsay from "./lindsay.png";
import stars from "./stars.png";

import "./Clients.css";

const Clients = (props) => (
  <section id="clients">
    <div className="container">
      <div className="row text-center">
        <div className="intro-title container col-lg-10 col-md-10 col-xs-10 col-sm-10 text-center">
          <h1> Clients say..!</h1>
          <br />
          <br />

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner container">
              <div className="carousel-item active  col-md-10 col-xs-12">
                <div className="client-card ">
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
                    <p>Founder</p>
                    <p>
                      {" "}
                      Working with the team at Devlights has been a great
                      experience. The Team is knowledgeable, responsive and
                      gracious. I highly recommend them, for any project large
                      or small.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item  col-md-10 col-xs-12">
                <div className="client-card">
                  <div className="profile-row">
                    <div className="img-container">
                      <img className="img-fluid" src={ross} alt="meet" />
                    </div>
                    <div className="data-container text-left">
                      <div className="client-name">
                        <h4> Ross Forsyth</h4>
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
                    <p>
                      {" "}
                      DevLights is a great team to work with. Not only do they
                      have the skills to get the job done but they communicate
                      effectively at every level throughout the project. Their
                      team was just what we needed!
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item col-md-10 col-xs-12">
                <div className="client-card  ">
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
                    <p>
                      {" "}
                      Devlights has been such a useful team, I’ve come to look
                      at them like family. With the variety of experience
                      everyone has, it seems there’s always a great fit for a
                      variety of projects. I have brought them on to long-term
                      projects with me and I wouldn’t have it any other way
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Clients;
