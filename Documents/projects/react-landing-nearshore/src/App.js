import React from 'react';
import logo from './logo.svg';
import Toolbar from './Components/Toolbar/Toolbar';
import IntroSection from './Components/IntroSection/IntroSection';
import WhyHiring from './Components/WhyHiring/WhyHiring';
import Benefits from './Components/Benefits/Benefits';
import Partnership from './Components/Partnership/Partnership';
import Howitworks from './Components/Howitworks/Howitworks';
import ConnectionSection from './Components/ConnectSection/ConnectionSection';
import Clients from './Components/Clients/Clients';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar/>
        <IntroSection/>
        <WhyHiring/>
        <Benefits/>
        <Partnership/>
        <Howitworks/>
        <ConnectionSection/>
        <Clients/>
        <Team/>
        <Footer/>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
