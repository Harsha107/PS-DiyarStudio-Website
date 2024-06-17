import React from 'react';
import Navbar from './Components/vid-header/Vid-header';
import PhotoPortfolioCmp from '../Photography/Components/PhotoPortfolioCmp/PhotoPortfolioCmp';
import LWT from '../ContentCreators/Components/LetsWorkTogether/LWT';
import Footer from '../HomePage/Components/Footer/FooterNew';
import VideoMainPic from './Components/VideoMainPic/VideoMainPic';
import VideoContent from './Components/VideoContent/VideoContent';

const Videography = () => {
    return (
        <div>
            <Navbar/>
            <VideoMainPic/>
            <VideoContent/>
            <PhotoPortfolioCmp/>
            <LWT/>
            <Footer/>
        </div>
    );
};

export default Videography;