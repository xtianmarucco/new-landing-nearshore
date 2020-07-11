import React from "react";
import ross from "./ross.png";
import darlene from "./darlene.png";
import lindsay from "./lindsay.png";
import stars from "./stars.png";
import "aos";
import "./Clients.scss";

const Clients = (props) => (
  <section id="clients">
    <div className="container">
      <div className="row text-center">
        <div className="intro-title container col-lg-10 col-md-10 col-xs-10 col-sm-10 text-center">
          <h1>What our clients say about us</h1>
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
              <div className="row">
                <div className="col-1">
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
                </div>

                <div className="col-12 carousel-items">
                  <div className="carousel-item active">
                    <div className="client-card ">
                      <div className="profile-row">
                        <div className="img-container">
                          <img
                            className="img-fluid img-client"
                            src={darlene}
                            alt="meet"
                          />
                        </div>
                        <div className="data-container text-left">
                          <div className="client-name">
                            <h4>Darlene Liebman</h4>
                          </div>
                          <div className="client-position">
                            <h6
                              style={{
                                fontFamily: "open sans",
                                fontWeight: "bold",
                                color: "#33333a",
                              }}
                            >
                              Creative Humans
                            </h6>
                          </div>
                        </div>
                        <div className="rating">
                          <img
                            className="img-fluid img-client"
                            src={stars}
                            alt="meet"
                          />
                        </div>
                      </div>

                      <div className="client-testimony text-left ">
                        <p
                          style={{
                            color: "#33333a",
                            fontFamily: "open sans",
                            fontWeight: "bold",
                          }}
                        >
                          Founder
                        </p>
                        <p
                          style={{ color: "#33333a", fontFamily: "open sans" }}
                        >
                          {" "}
                          Working with the team at Devlights has been a great
                          experience. The Team is knowledgeable, responsive and
                          gracious. I highly recommend them, for any project
                          large or small.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="client-card">
                      <div className="profile-row">
                        <div className="img-container">
                          <img
                            className="img-fluid img-client"
                            src={ross}
                            alt="meet"
                          />
                        </div>
                        <div className="data-container text-left">
                          <div className="client-name">
                            <h4>Ross Forsyth</h4>
                          </div>
                          <div className="client-position">
                            <h6
                              style={{
                                fontFamily: "open sans",
                                fontWeight: "bold",
                                color: "#33333a",
                              }}
                            >
                              Human design
                            </h6>
                          </div>
                        </div>
                        <div className="rating">
                          <img className="img-fluid" src={stars} alt="meet" />
                        </div>
                      </div>

                      <div className="client-testimony text-left ">
                        <p
                          style={{
                            color: "#33333a",
                            fontFamily: "open sans",
                            fontWeight: "bold",
                          }}
                        >
                          Director of technology
                        </p>
                        <p
                          style={{ color: "#33333a", fontFamily: "open sans" }}
                        >
                          {" "}
                          DevLights is a great team to work with. Not only do
                          they have the skills to get the job done but they
                          communicate effectively at every level throughout the
                          project. Their team was just what we needed!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="client-card">
                      <div className="profile-row">
                        <div className="img-container">
                          <img className="img-fluid" src={lindsay} alt="meet" />
                        </div>
                        <div className="data-container text-left">
                          <div className="client-name">
                            <h4>Lindsay Insco</h4>
                          </div>
                          <div className="client-position">
                            <h6
                              style={{
                                fontFamily: "open sans",
                                fontWeight: "bold",
                                color: "#33333a",
                              }}
                            >
                              Millenium Digital Technologies
                            </h6>
                          </div>
                        </div>
                        <div className="rating">
                          <img className="img-fluid" src={stars} alt="meet" />
                        </div>
                      </div>

                      <div className="client-testimony text-left ">
                        <p
                          style={{
                            color: "#33333a",
                            fontFamily: "open sans",
                            fontWeight: "bold",
                          }}
                        >
                          Lead Developer
                        </p>
                        <p
                          style={{ color: "#33333a", fontFamily: "open sans" }}
                        >
                          {" "}
                          Devlights has been such a useful team, I’ve come to
                          look at them like family. With the variety of
                          experience everyone has, it seems there’s always a
                          great fit for a variety of projects. I have brought
                          them on to long-term projects with me and I wouldn’t
                          have it any other way
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1">
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
        </div>
      </div>
    </div>
  </section>
);
export default Clients;
