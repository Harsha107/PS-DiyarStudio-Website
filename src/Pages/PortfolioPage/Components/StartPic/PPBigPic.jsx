import React from 'react';
import './PPBigPicStyles.css';
import img1 from '../../../../assets/egor-vikhrev-RSI9-LVlpkw-unsplash.jpg'

const PPBigPic = () => {
    return (
        <div className='ppbp-container'>
            <img src={img1} alt="" className="ppbp-main-pic" />
            <div className='ppbp-overlay'>
                <h1 className='ppbp-overlay-text'>Portfolio</h1>
            </div>
        </div>
    );
};

export default PPBigPic;