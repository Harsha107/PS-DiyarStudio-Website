import React from 'react';
import './PhotoMainPicStyles.css';
import photo1 from '../../../../assets/photography-studio-gallery-4.xbe2488c3.jpg';

const PhotoMainPic = () => {
    return (
        <div className="photo-main-pic-container">
            <img src={photo1} alt="" className="photo-main-pic" />
            <div className="pmp-overlay">
                <h1 className="pmp-overlay-text">Photography</h1>
            </div>
        </div>
    );
};

export default PhotoMainPic;