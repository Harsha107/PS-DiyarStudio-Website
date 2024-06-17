import React from 'react';
import './StudioRentalsMainPicStyles.css';
import std1 from '../../../../assets/studio-rentals/studio rentals.jpg';

const StudioRentalsMainPic = () => {
    return (
        <div className="studio-rentals-main-pic-container">
            <img src={std1} alt="" className="studio-rentals-main-pic" />
            <div className="srmp-overlay">
                <h1 className="srmp-overlay-text">Studio Rentals</h1>
            </div>
        </div>
    );
};

export default StudioRentalsMainPic;