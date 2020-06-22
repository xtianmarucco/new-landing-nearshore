import React from 'react';
import './toolbar.css';

const toolbar = props =>(

<header className=" fixed-top header-scrolled">

 <nav className=" toolbar navbar navbar-expand-lg mobile-nav  ">
 <div className="container " >
 <div class="logo float-left flex-item"><a class="scrollto" href="#intro"><img class="img-fluid" src="https://devlights.com/img/logo.png" alt="Logo de devlights"/></a></div>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"> </span>
  </button>
    
<div className="collapse navbar-collapse flex-item "  id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active">
        <a className="nav-link active" href=" ">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active" href=" ">About <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active" href=" ">Service <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active" href=" ">Portfolio <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active" href=" ">Clients <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active" href=" ">Careers<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active" href=" ">Contact<span class="sr-only">(current)</span></a>
      </li>
     
      <li classNames="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          EN
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href=" ">ES</a>
        
        </div>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
  

</header>



);
export default toolbar;