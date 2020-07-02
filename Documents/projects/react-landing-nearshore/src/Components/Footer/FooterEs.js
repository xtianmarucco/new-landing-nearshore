import React from "react";
import "./Footer.css";
import FooterFormEs from "../FooterForm/FooterFormEs";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const footer = (props) => (
  <section className="footer" id="footer">
    <div className="footer-title text-center">
      <h2>Contáctanos</h2>
    </div>
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-xs-8  col-sm-6 col-md-4 col-lg-4 col-xl-4 wow fadeInUp">
          <div className="datos">
            <img
              className="footer-logo-devlights"
              src="https://devlights.com/img/portfolio-section/logo-white.png"
              alt="Devlights"
            />
            <ul className="footer-list-ul">
              <li>
                <FaMapMarkerAlt className="icons-footer" />
                <p className="footer-first-col-p">
                  Boulder, Colorado United States 1355 Bear Mountain Drive.
                </p>
                <FaEnvelope className="icons-footer" />{" "}
                <p className="footer-first-col-p">
                  robert.hughes@devlights.com
                </p>
                <FaPhoneAlt className="icons-footer" />
                <p className="footer-first-col-p"> +1 (303) 325-30853</p>
                <FaEnvelope className="icons-footer" />
                <p className="footer-first-col-p"> contact@devlights.com</p>
              </li>
            </ul>

            <ul className="footer-list-ul">
              <li>
                <FaMapMarkerAlt className="icons-footer" />
                <p className="footer-first-col-p">
                  {" "}
                  Corrientes, Argentina. 1250 Junin 2do Piso, Oficina 1.
                </p>

                <FaPhoneAlt className="icons-footer" />
                <p className="footer-first-col-p"> +54 (0379) 4230003</p>
                <FaEnvelope className="icons-footer" />
                <p className="footer-first-col-p"> contacto@devlights.com</p>
              </li>
            </ul>
          </div>
          <div
            className="clutch-widget logo_clutch"
            data-url="https://widget.clutch.co"
            data-widget-type="2"
            data-height="50"
            data-darkbg="1"
            data-clutchcompany-id="414104"
          >
            <iframe
              id="iframe-0.8313833580771808"
              width="100%"
              src="https://widget.clutch.co/widgets/get/2/darkbg?ref_domain=devlights.com&amp;uid=414104&amp;ref_path=/"
              height="50px"
              title='{"type":"iframe-resize","data":{"width":276,"height":246},"uuid":"f596c86ee157494386aaae92550466f5"}2 Dark'
            ></iframe>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 wow fadeInUp footer_link_last">
          <div className="footer-menu-links-title">
            <h4>LINKS</h4>
          </div>
          <div className="footer-menu-links-items">
            <ul className="footer_list_ul_links">
              <li className="links-menu-li-menu">
                <a href="https://devlights.com/es/#about">Nosotros</a>
              </li>
              <li className="links-menu-li-menu">
                <a href="https://devlights.com/nearshore-software-development/">
                  Servicio de desarrollo Nearshore
                </a>
              </li>
              <li className="links-menu-li-menu">
                <a href="https://devlights.com/es/#careers">Unite al equipo</a>
              </li>
              <li className="links-menu-li-menu">
                <a href="https://devlights.com/es/#services">Servicios</a>
              </li>
              <li className="links-menu-li-menu">
                <a href="https://devlights.com/es/#clients">Clientes</a>
              </li>
              <li className="links-menu-li-menu">
                <a href="https://devlights.com/es">Inicio</a>
              </li>
              <li className="links-menu-li-menu">
                <a href="https://devlights.com/es/#portfolio">Portfolio</a>
              </li>
              <br />
              <div className="social_icons">
                <a href="https://www.facebook.com/devlightsok/">
                  <FaFacebook className="icons-footer-links" />
                </a>
                <a href="https://twitter.com/devlightsok">
                  <FaLinkedin className="icons-footer-links" />
                </a>
                <a href="https://www.linkedin.com/company/devlights/">
                  <FaTwitter className="icons-footer-links" />
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 wow fadeInUp form_email">
          <h4>Contáctanos</h4>
          <br />

          <FooterFormEs />
        </div>
      </div>
    </div>
  </section>
);

export default footer;
