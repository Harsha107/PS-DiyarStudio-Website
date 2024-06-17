import React from 'react';
import s1 from '../../../../assets/services.jpg';
import './MainPicStyles.css';

const MainPic = () => {
    return (
        <div className="services-main-pic-container">
            <img src={s1} alt="" className="smp-img" />
            <div className="smp-img-overlay">
                <h1 className="smp-overlay-text">Services</h1>
            </div>
        </div>
    );
};

export default MainPic;