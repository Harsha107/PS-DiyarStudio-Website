import React from 'react';
import './AboutUsMainPicStyles.css';
import abu1 from '../../../../assets/about us.jpg';

const AboutUsMainPic = () => {
    return (
        <div className="aboutUs-mainPic-container">
            <img src={abu1} alt="" className="aboutUs-mainPic" />
            <div className="aboutUs-mainPic-overlay">
                <h1 className="aboutUs-mainPic-overlay-text">About Us</h1>
            </div>
        </div>
    );
};

export default AboutUsMainPic;