import React from 'react';
import './Footer.css';
import FooterFormEs from '../FooterForm/FooterFormEs'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa' ;


const footer = props =>(
<section class="footer" id="footer" >
<div class="footer-title text-center"><h2>Contáctanos</h2></div>
<div className="container">
    <br/>
    <br/>
    <div className="row">
    <div class="col-xs-8  col-sm-6 col-md-4 col-lg-4 col-xl-4 wow fadeInUp" >
        <div class="datos">
            <img class="footer-logo-devlights" src="https://devlights.com/img/portfolio-section/logo-white.png" alt="Devlights"/>
            <ul class="footer-list-ul">
                <li>
                <FaMapMarkerAlt className="icons-footer"/>
                 <p class="footer-first-col-p">
                 Boulder, Colorado United States 1355 Bear Mountain Drive.</p>
                <FaEnvelope className="icons-footer"/> <p class="footer-first-col-p">robert.hughes@devlights.com</p>
                < FaPhoneAlt className="icons-footer"/><p class="footer-first-col-p">   +1 (303) 325-30853</p>
                <FaEnvelope className="icons-footer"/>
                <p class="footer-first-col-p"> contact@devlights.com</p></li>
            </ul>

            <ul class="footer-list-ul">
                <li><FaMapMarkerAlt className="icons-footer"/><p class="footer-first-col-p">  Corrientes, Argentina. 1250 Junin 2do Piso, Oficina 1.</p>
                
                < FaPhoneAlt className="icons-footer"/><p class="footer-first-col-p">  +54 (0379) 4230003</p>
                < FaEnvelope className="icons-footer"/><p class="footer-first-col-p">  contacto@devlights.com</p>
                </li>
            </ul>
         </div>
            <div class="clutch-widget logo_clutch"  data-url="https://widget.clutch.co" data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="414104"><iframe id="iframe-0.8313833580771808" width="100%" src="https://widget.clutch.co/widgets/get/2/darkbg?ref_domain=devlights.com&amp;uid=414104&amp;ref_path=/" height="50px" title="{&quot;type&quot;:&quot;iframe-resize&quot;,&quot;data&quot;:{&quot;width&quot;:276,&quot;height&quot;:246},&quot;uuid&quot;:&quot;f596c86ee157494386aaae92550466f5&quot;}2 Dark"></iframe>
            </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 wow fadeInUp footer_link_last">
        <div class="footer-menu-links-title"><h4>LINKS</h4></div>
        <div class="footer-menu-links-items">
            <ul class="footer_list_ul_links">
                <li class="links-menu-li-menu">
                    <a href="https://devlights.com/#about">Nosotros</a></li>
                    <li class="links-menu-li-menu"> 
                     <a href="https://devlights.com/nearshore-software-development/">Servicio de desarrollo Nearshore</a></li>
                    <li class="links-menu-li-menu">
                        <a href="https://devlights.com/#careers">Unite al equipo</a></li>
                    <li class="links-menu-li-menu"><a href="#services">Servicios</a></li>
                    <li class="links-menu-li-menu"><a href="#clients">Clientes</a></li>
                    <li class="links-menu-li-menu"><a href="#intro">Inicio</a></li>
                    <li class="links-menu-li-menu"><a href="#portfolio">Portfolio</a></li>
                    <br/>
                    <div class="social_icons">
                        <a href="https://www.facebook.com/devlightsok/"><FaFacebook  className="icons-footer-links"/></a>
                        <a href="https://twitter.com/devlightsok"><FaLinkedin className="icons-footer-links"/></a>
                        <a href="https://www.linkedin.com/company/devlights/"><FaTwitter className="icons-footer-links"/></a>
                    </div>
                    </ul>
        </div>
    </div>
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 wow fadeInUp form_email" >
        <h4>Contáctanos</h4>

        <FooterFormEs/>


    </div>


    



    </div>
</div>
</section>




);

export default footer ;