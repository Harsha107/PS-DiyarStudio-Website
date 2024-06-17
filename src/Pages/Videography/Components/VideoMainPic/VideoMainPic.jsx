import React from 'react';
import './VideoMainPicStyles.css';
import vid1 from '../../../../assets/kal-visuals-jA7iWRaJruA-unsplash.jpg';

const VideoMainPic = () => {
    return (
        <div className="video-main-pic-container">
            <img src={vid1} alt="" className="video-main-pic" />
            <div className="vmp-overlay">
                <h1 className="vmp-overlay-text">Videography</h1>
            </div>
        </div>
    );
};

export default VideoMainPic;