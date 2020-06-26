import React from 'react';
import benefits1 from './benefits1.png';
import benefits2 from './benefits2.png';
import benefits3 from './benefits3.png';
import './Benefits.css';


const Benefits = props =>(
 
    <section id="benefits">
        <div className="container">
        <h1 className="text-center">Space Benefits Summary</h1>

            <div className="row flex-grid benefits-container">
                <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
                <img className="img-fluid" src={benefits1} alt="office" />
                <br/>
                <br/>
                <br/>
                <h4>Afinidad cultural y zonas horarias similares.</h4>
                <br/>
                <p>Tenemos gente capaz de unirse a su equipo sin problemas, las relaciones interpersonales son fundamentales para nosotros. Podemos armar un nuevo equipo para que puedan comenzar su proyecto o hacerse cargo de uno ya existente sin restricciones como el lenguaje o diferencias culturales.</p>
                </div>
                <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
                <img className="img-fluid" src={benefits2} alt="office" />
                <br/>
                <br/>
                <br/>
                <h4> Precios incomparable, transparencia, eficacia conveniencia </h4>
                <br/>
                <p>En devlights le brindamos términos claros de Contratación, y somos capaces de brindarle especialistas en cada tecnología para formar parte de su equipo por una fracción de lo que costaría contratar talento local.</p>
                </div>
        
                <div className="benefit-card text-center col-md-4 col-sm-12 col-xs-12">
        
                <img className="img-fluid" src={benefits3} alt="office" />
                <br/>
                <br/>
                <br/>
                <h4>Libere su potencial y alcance sus objetivos. </h4>
                <br/>
                <p>Las relaciones a largo plazo con nuestros clientes son muy importantes para nosotros y son uno de los valores fundamentales para Devlights. Procuramos crear un fuerte vínculo con nuestros clientes para poder trabajar juntos de la mejor manera y ayudarlos a alcanzar sus metas en el largo plazo.</p>

                </div>
              
               
            </div>
        </div>




    </section>

);
export default Benefits;