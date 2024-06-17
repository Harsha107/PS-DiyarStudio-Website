import React from 'react';
import './HeroCmp1Styles.css';

const HeroCmp1 = () => {
    return (
        <div className="hero-cmp-container">
            <div className="h1-container">
                <div className="hero-cmp-content">
                    <h1 className="h1-overlay1-text">From pictures to moments</h1>
                    <p className="h1-overlay2-text">We believe that our photography goes beyond just pushing a button and capturing the moment. There is a connection with each and every client, the essence of communication is shown in every photo and it has its own story and message.</p>
                </div>
                <h1 className="h1-overlay1-text mobile-our-services" id='hmpg-our-services'>Our Services</h1>
            </div>
        </div>
    );
};

export default HeroCmp1;