import React from 'react';
import './StudioRentalsCSS.css';
import Navbar from './Components/stdRentals-header/StdRentals-header';
import RAQ from './Components/SR-RAQ/Sr-raq';
import Footer from '../HomePage/Components/Footer/FooterNew';
import StudioRentalsMainPic from './Components/StudioRentalsMainPic/StudioRentalsMainPic';
import StudioRentalsSlider from './Components/StudioRentalsSlider/StudioRentalsSlider';

const StudioRentals = () => {
    return (
        <div>
            <Navbar/>
            <StudioRentalsMainPic/>
            <StudioRentalsSlider/>
            <RAQ/>
            <Footer/>
        </div>
    );
};

export default StudioRentals;