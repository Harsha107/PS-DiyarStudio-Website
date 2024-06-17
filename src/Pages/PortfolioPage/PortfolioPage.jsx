import React from 'react';
import Navbar from './Components/portfolio-header/Portfolio-header';
import Footer from '../HomePage/Components/Footer/FooterNew';
import PPBigPic from './Components/StartPic/PPBigPic';
import PPCmp from './Components/Content/PPCmp';

const PortfolioPage = () => {
    return (
        <div>
            <Navbar/>
            <PPBigPic/>
            <PPCmp/>
            <Footer/>
        </div>
    );
};

export default PortfolioPage;