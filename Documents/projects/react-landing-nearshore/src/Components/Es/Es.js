import React from 'react';

import IntroSectionEs from '../IntroSection/IntroSectionEs';
import BenefitsEs from '../Benefits/BenefitsEs';
import WhyHiringEs from '../WhyHiring/WhyHiringEs';
import PartnershipEs from '../Partnership/PartnershipEs';
import HowitworksEs from '../Howitworks/HowitworksEs';
import ConnectionSectionEs from '../ConnectSection/ConnectionSectionEs';
import ClientsEs from '../Clients/ClientsEs';
import TeamEs from '../Team/TeamEs';
import FooterEs from '../Footer/FooterEs';
import ToolbarEs from '../Toolbar/ToolbarEs';







function Es() {
    return (
      <div className="App">
         <ToolbarEs/>
         <IntroSectionEs/>
         <WhyHiringEs/>
         <BenefitsEs/>
         <PartnershipEs/>
         <HowitworksEs/> 
         <ConnectionSectionEs/>
         <ClientsEs/>
         <TeamEs/>
         <FooterEs/>


        
      </div>
    );
  }
  
  export default Es;
  


