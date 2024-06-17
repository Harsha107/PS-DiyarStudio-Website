import React from 'react';
import NavBar from './Components/aboutUs-header/AboutUs-header';
import Footer from '../HomePage/Components/Footer/FooterNew';
import AboutUsMainPic from './Components/AboutUsMainPic/AboutUsMainPic';
import AboutUsContent from './Components/AboutUsContent/AboutUsContent';

const AboutUsPage = () => {
    return (
        <div>
            <NavBar/>
            <AboutUsMainPic/>
            <AboutUsContent/>
            <Footer/>
        </div>
    );
};

export default AboutUsPage;