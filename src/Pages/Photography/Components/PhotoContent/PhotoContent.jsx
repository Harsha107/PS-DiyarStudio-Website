import React from 'react';
import './PhotoContentStyles.css';
import photocont1 from '../../../../assets/photo-content/photo_1.jpg';
import photocont2 from '../../../../assets/photo-content/photo_2.jpg';
import photocont3 from '../../../../assets/photo-content/photo_3.jpg';

const PhotoContent = () => {
    const handleButton = () => {
        return (
            window.location.href = '/more-info'
        );
    };
    return (
        <div className="photo-content-container">
            <div className="photo-content-title-container"><h1 className="photo-content-title">Pricing</h1></div>
            <div className="photo-content-boxes-container">
                <div className="photo-content-box1">
                    <div className="photo-content-img-container">
                        <img src={photocont1} alt="" className="photo-content-img1" />
                    </div>
                    <div className="photo-content-text-container boxes1">
                        <span className="photo-content-text-title-container"><p className="photo-content-text-title">Individual Session</p></span><br/>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt1'>30 minute session time</p></span>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt3'>10-20 edited images</p></span>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt4'>Delivery within 1 week</p></span>
                        <span className="photo-content-money-container"><p className="photo-content-subt2">Dhs. 350</p></span><br/>
                        <span className="photo-content-button-container"><button className="photo-content-btn" onClick={handleButton}>More Info</button></span><br/>
                    </div>
                </div>
                <div className="photo-content-box2">
                    <div className="photo-content-img-container">
                        <img src={photocont2} alt="" className="photo-content-img1" />
                    </div>
                    <div className="photo-content-text-container box1">
                        <span className="photo-content-text-title-container"><p className="photo-content-text-title">Group Session</p></span><br/>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt1'>60 minute session time</p></span>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt3'>15-30 edited images</p></span>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt4'>Delivery within 2 weeks</p></span>
                        <span className="photo-content-money-container"><p className="photo-content-subt2">Dhs. 500</p></span><br/>
                        <span className="photo-content-button-container"><button className="photo-content-btn" onClick={handleButton}>More Info</button></span><br/>
                    </div>
                </div>
                <div className="photo-content-box3">
                    <div className="photo-content-img-container">
                        <img src={photocont3} alt="" className="photo-content-img1" />
                    </div>
                    <div className="photo-content-text-container box1">
                        <span className="photo-content-text-title-container"><p className="photo-content-text-title">Event Session</p></span><br/>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt3'>120 minute session time</p></span>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt4'>30-40 edited images</p></span>
                        <span className="photo-content-subt1-container"><p className='photo-content-subt1'>Delivery within 4 weeks</p></span><br/>
                        <span className="photo-content-money-container"><p className="photo-content-subt2">Dhs. 1000</p></span>
                        <span className="photo-content-button-container"><button className="photo-content-btn" onClick={handleButton}>More Info</button></span><br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoContent;