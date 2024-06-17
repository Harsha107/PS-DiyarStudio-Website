import React from 'react';
import Footer from './Components/Footer/FooterNew';
import Navbar from './Components/Navbar/Navbar';
import PortfolioCmp from './Components/PortFolioComp/PortfolioCmp';
import Videocmp from './Components/VideoComponent/Videocmp';
import HeroCmp1 from './Components/HeroCmp1/HeroCmp1';
import WhatOthersSay from './Components/WhatOthersSay/WhatOthersSay';
import HeroCmpSlider from './Components/HeroCmpSlider/HeroCmpSlider';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Videocmp/>
        <HeroCmp1/>
        <HeroCmpSlider/>
        <PortfolioCmp/>
        <WhatOthersSay/>
        <Footer/>
    </div>
  )
}

export default HomePage