import React from 'react';
import Navbar from './Components/contactUs-header/ContactUs-header';
import CUMainPic from './Components/CUMainPic/CUMainPic';
import LWT from '../ContentCreators/Components/LetsWorkTogether/LWT';
import Footer from '../HomePage/Components/Footer/FooterNew';

const AboutUsLWT = () => {
    return (
        <div>
            <Navbar/>
            <CUMainPic/>
            <LWT/>
            <Footer/>
        </div>
    );
};

export default AboutUsLWT;