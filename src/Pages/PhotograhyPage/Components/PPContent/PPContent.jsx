import React from 'react';
import './PPContentStyles.css';
import ppContImg1 from '../../../../assets/photography-page/gianandrea-villa-WQSicSYcdoE-unsplash.jpg';
import ppContImg2 from '../../../../assets/photography-page/gaining-visuals-8X5_nh8R3Vk-unsplash.jpg';
import ppContImg3 from '../../../../assets/photography-page/harry-truong-oS7B-mDYMqk-unsplash.jpg';

const PPContent = () => {

    const handleButton1 = () => {
        return (
            window.location.href = '/contact-us/lets+work+together'
        )
    }

    const handleButton2 = () => {
        return (
            window.location.href = '/contact-us/request+a+quote'
        );
    };

    return (
        <div className="pp-content-container">
            <div className="pp-content-title-container"><h1 className="pp-content-title">Individual Session</h1></div>
            <div className="pp-content-box">
                <div className="pp-content-subContainer">
                    <div className="pp-content-text-container box1">
                        <span className="pp-content-text-title-container"><h3 className="pp-content-text-title">Time Duration</h3></span>
                        <span className="pp-content-subt-container"><p className="pp-content-subt">We understand your time is valuable, which is why our sessions are efficient and convinient, with a duration of approximtely 30 minutes.</p></span>
                    </div>
                    <div className="pp-content-img-container">
                        <img src={ppContImg1} alt="" className="pp-content-img" />
                    </div>
                </div>
                <div className="pp-content-subContainer">
                    <div className="pp-content-text-container">
                        <span className="pp-content-text-title-container"><h3 className="pp-content-text-title">Final Products</h3></span>
                        <span className="pp-content-subt-container"><p className="pp-content-subt">During this time, our professional photographers work closely with you 
to ensure a comfortable and enjoyable experience. Within a week, we provide you with a collection of 10-20 beautifully edited images.</p></span>
                    </div>
                    <div className="pp-content-img-container">
                        <img src={ppContImg2} alt="" className="pp-content-img" />
                    </div>
                </div>
                <div className="pp-content-subContainer">
                    <div className="pp-content-text-container">
                        <span className="pp-content-text-title-container"><h3 className="pp-content-text-title">Total Time</h3></span>
                        <span className="pp-content-subt-container"><p className="pp-content-subt">The total cost of the session will depend on various factors, including the chosen backdrop or location, additional services such as makeup and styling, and any specific requirements you may have.</p></span>
                    </div>
                    <div className="pp-content-img-container">
                        <img src={ppContImg3} alt="" className="pp-content-img" />
                    </div>
                </div>
            </div>
            <div className="pp-content-btns-container">
                <button className="pp-content-btn1" onClick={handleButton1}>Book Service</button>
                <button className="pp-content-btn2" onClick={handleButton2}>Request Quote</button>
            </div>
        </div>
    );
};

export default PPContent;