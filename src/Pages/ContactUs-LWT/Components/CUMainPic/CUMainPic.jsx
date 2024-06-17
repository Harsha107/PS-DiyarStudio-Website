import React from 'react';
import './CUMainPicStyles.css';
import au1 from '../../../../assets/annie-spratt-QckxruozjRg-unsplash.jpg';

const AUMainPic = () => {
    return (
        <div className="au-mainPic-container">
            <img src={au1} alt="" className="au-mainPic" />
            <div className="au-overlay">
                <h1 className="au-overlay-text">Contact Us</h1>
            </div>
        </div>
    );
};

export default AUMainPic;