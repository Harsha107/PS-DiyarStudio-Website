import React from 'react';
import './VideoContentStyles.css';
import videocont1 from '../../../../assets/video-content/video_1.jpg';
import videocont2 from '../../../../assets/video-content/video_2.jpg';
import videocont3 from '../../../../assets/video-content/video_3.jpg';

const VideoContent = () => {
    const handleButton = () => {
        return (
            window.location.href = '/more-info'
        );
    };
    return (
        <div className="video-content-container">
            <div className="video-content-title-container"><h1 className="video-content-title">Pricing</h1></div>
            <div className="video-content-boxes-container">
                <div className="video-content-box1">
                    <div className="video-content-img-container">
                        <img src={videocont1} alt="" className="video-content-img1" />
                    </div>
                    <div className="video-content-text-container box1">
                        <span className="video-content-text-title-container box1"><p className="video-content-text-title">Short Videos</p></span>
                        <span className="video-content-text-title-container mobile"><p className="video-content-text-title">Short</p></span>                        
                        <span className="video-content-text-title-container vids"><p className="video-content-text-title">Videos</p></span><br/>
                        <span className="video-content-subt1-container"><p className='video-content-subt1'>20 minute session time</p></span>
                        <span className="video-content-subt1-container"><p className='video-content-subt3'>2 editing rounds</p></span>
                        <span className="video-content-subt1-container"><p className='video-content-subt4'>Raw and edited footage</p></span>
                        <span className="video-content-money-container"><p className="video-content-subt2">Dhs. 200</p></span><br/>
                        <span className="video-content-button-container"><button className="video-content-btn" onClick={handleButton}>More Info</button></span><br/>
                    </div>
                </div>
                <div className="video-content-box2">
                    <div className="video-content-img-container box2">
                        <img src={videocont2} alt="" className="video-content-img1" />
                    </div>
                    <div className="video-content-text-container">
                        <span className="video-content-text-title-container"><p className="video-content-text-title">YouTube Videos</p></span><br/>
                        <span className="video-content-subt1-container"><p className='video-content-subt1'>60 minute session time</p></span>
                        <span className="video-content-subt1-container"><p className='video-content-subt3'>3 editing rounds</p></span>
                        <span className="video-content-subt1-container"><p className='video-content-subt4'>Edited footage in 4 days</p></span>
                        <span className="video-content-money-container"><p className="video-content-subt2">Dhs. 500</p></span><br/>
                        <span className="video-content-button-container"><button className="video-content-btn" onClick={handleButton}>More Info</button></span><br/>
                    </div>
                </div>
                <div className="video-content-box3">
                    <div className="video-content-img-container box3">
                        <img src={videocont3} alt="" className="video-content-img1" />
                    </div>
                    <div className="video-content-text-container">
                        <span className="video-content-text-title-container"><p className="video-content-text-title">Event Coverage</p></span><br/>
                        <span className="video-content-subt1-container"><p className='video-content-subt3'>120 minute session time</p></span>
                        <span className="video-content-subt1-container"><p className='video-content-subt4'>6 editing rounds</p></span>
                        <span className="video-content-subt1-container"><p className='video-content-subt1'>Delivery within 2 weeks</p></span><br/>
                        <span className="video-content-money-container"><p className="video-content-subt2">Dhs. 1000</p></span>
                        <span className="video-content-button-container"><button className="video-content-btn" onClick={handleButton}>More Info</button></span><br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoContent;