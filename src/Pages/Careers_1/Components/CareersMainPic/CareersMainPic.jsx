import React from 'react';
import './CareersMainPicStyles.css';
import careersImg1 from '../../../../assets/careers.jpg';

const CareersMainPic = () => {
    return (
        <div className="careers-main-pic-container">
            <img src={careersImg1} alt="" className="careers-main-pic" />
            <div className="careers-img-overlay">
                <h1 className="careers-img-overlay-text">Careers</h1>
            </div>
        </div>
    );
};

export default CareersMainPic;