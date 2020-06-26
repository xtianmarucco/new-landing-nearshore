import React from 'react';
import './ConnectionSection.css';
import MainForm from '../MainForm/MainFormEs';



const connect = props =>(
 
    <section id="connectionsection">
        <div className="container">
            <div className="row flex-grid">
                <div className="intro-title container col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                   <div className="col-md-6 col-xs-12 col-sm-12 text-connect">
                       <h1>Conectamos al cliente con su producto</h1>
                       <br/>
                       <p>En Devlights hacemos que las cosas pasen. Nuestro servicio de outsourcing le da a nuestros clientes acceso a una vasta base de talento tecnológico. Conseguir el talento adecuado para formar un equipo es esencial para el éxito de cualquier negocio o proyecto, pero la eficiencia requiere dedicar recursos significativos al proyecto. Muchas veces el presupuesto puede ser acotado y los tiempos para los proyectos son ajustados o la compañía simplemente necesita alguien que se encargue full-time del proyecto para realizar una tarea. En este caso Nuestro servicio es la solución para muchos de nuestros clientes. Devlights puede brindarle mano de obra especializada para proyectos a largo y corto plazo, formar equipos de trabajo según sus necesidades y a una fracción del costo.</p>
                   </div>
                   <div className="col-md-6 col-xs-12 col-sm-12 text-center form-connect">
                  

                      <div className="form-container">
                      <div className="col-sm-12 text-connect text-center">
                       <h1  style={{color:'#10b5e9' }}>Contactanos</h1>
                      <br/>
                       <MainForm/>
                      </div>

                      </div>  
                   </div>
                </div>
              
            </div>
        </div>

    </section>

);
export default connect;