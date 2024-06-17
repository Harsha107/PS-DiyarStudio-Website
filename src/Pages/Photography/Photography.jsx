import React from 'react';
import Navbar from './Components/pho-header/Ph-header';
import LWT from '../ContentCreators/Components/LetsWorkTogether/LWT';
import Footer from '../HomePage/Components/Footer/FooterNew';
import PhotoMainPic from './Components/PhotoMainPic/PhotoMainPic';
import PhotoPortfolioCmp from './Components/PhotoPortfolioCmp/PhotoPortfolioCmp';
import PhotoContent from './Components/PhotoContent/PhotoContent';

const Photography = () => {
    return (
        <div>
            <Navbar/>
            <PhotoMainPic/>
            <PhotoContent/>
            <PhotoPortfolioCmp/>
            <LWT/>
            <Footer/>
        </div>
    );
};

export default Photography;