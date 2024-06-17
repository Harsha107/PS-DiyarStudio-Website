import React from 'react';
import NavBar from '../ContactUs-LWT/Components/contactUs-header/ContactUs-header';
import CUMainPic from '../ContactUs-LWT/Components/CUMainPic/CUMainPic';
import RAQ from './Components/RequestAQuote/RAQ';
import Footer from '../HomePage/Components/Footer/FooterNew';

const AboutUsRAQ = () => {
    return (
        <div>
            <NavBar/>
            <CUMainPic/>
            <RAQ/>
            <Footer/>
        </div>
    );
};

export default AboutUsRAQ;