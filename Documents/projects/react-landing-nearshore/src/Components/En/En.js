import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import IntroSection from '../IntroSection/IntroSection';
import WhyHiring from '../WhyHiring/WhyHiring';
import Benefits from '../Benefits/Benefits';
import Partnership from '../Partnership/Partnership';
import Howitworks from '../Howitworks/Howitworks';
import ConnectionSection from '../ConnectSection/ConnectionSection';
import Clients from '../Clients/Clients';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrollButton/ScrollButton';


function Home() {
  return (
    <div className="Home">

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
        <ScrollButton/>    

    </div>
  );
}

export default Home;
