import React from 'react';
import './PPMainPicStyles.css';
import pp1 from '../../../../assets/photography-studio-gallery-4.xbe2488c3.jpg'

const PPMainPic = () => {
    return (
        <div className="pp-main-pic-container">
            <img src={pp1} alt="" className="pp-main-pic" />
            <div className="pp-overlay">
                <h1 className="pp-overlay-text">Photography</h1>
            </div>
        </div>
    );
};

export default PPMainPic;