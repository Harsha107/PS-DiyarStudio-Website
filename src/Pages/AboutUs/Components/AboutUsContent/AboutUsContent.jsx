import React from 'react';
import './AboutUsContentStyles.css';

const AboutUsContent = () => {

    const handleButton1 = () => {
        return (
            window.location.href = '/'
        );
    };

    const handleButton2 = () => {
        return (
            window.location.href = '/services'
        );
    };

    return (
        <div className="aboutUs-content-container">
            <div className="aboutUs-content-box">
                <p className="aboutUs-content">Diyar Studios is located in Dilan Tower, Culture Village, Al Jaddaf, Dubai. Equipped with a changing room, a lounge area, and a large shooting area with multiple sets. We designed a casual working place where anyone can feel comfortable, and at ease, despite the abundance of technical equipment, and a driven work ethic. We work for both individuals and businesses and thrive to exceed their expectations in terms of service and final product.</p>
                <br/>
                <p className="aboutUs-content">We believe that our photography goes beyond just pushing a button and capturing the moment. There is a connection with each and every client, the essence of communication is shown in every photo and it has its own story and message.</p>
                <br/>
                <p className="aboutUs-content">The Diyar Studios based in Dubai is led by a creative and innovative team of professional Photographers & Videographers who will always impress you with their personalities and out-of-the-box ideas.</p>
            </div>
            <div className="aboutUs-content-btn-container">
                <button className="aboutUs-content-btn1" onClick={handleButton1}>Home Page</button>
                <button className="aboutUs-content-btn2" onClick={handleButton2}>Services</button>
            </div>
        </div>
    );
};

export default AboutUsContent;