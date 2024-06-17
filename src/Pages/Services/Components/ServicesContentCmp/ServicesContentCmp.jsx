import React from 'react';
import './SCCStyles.css';
import sc1 from '../../../../assets/homepage/11.png';
import sc2 from '../../../../assets/homepage/5.png';
import sc3 from '../../../../assets/homepage/jakob-owens-Av7fp7AqJr0-unsplash.jpg';
import sc4 from '../../../../assets/portfolio/1.png';

const ServicesContentCmp = () => {
    const handleClick1 = () => {
        return (
            window.location.href = '/photography'
        );
    };

    const handleClick2 = () => {
        return (
            window.location.href = '/videography'
        );
    };

    const handleClick3 = () => {
        return (
            window.location.href = '/studio-rentals'
        );
    };

    const handleClick4 = () => {
        return (
            window.location.href = '/content-creators'
        );
    };

    return (
        <div className="services-content-cmp-container">
            <div className="scc-content-container">
                <div className="scc-content-box">
                    <div className="scc-img-container">
                        <img src={sc1} alt="" className="scc-img" />
                    </div>
                    <div className="scc-text_btn-container">
                        <span className="scc-text1-container"><p className="scc-text1">Photography</p></span>
                        <span className="scc-t1-subtext-container"><p className="scc-sbt">Fashion, Still life, Editorial, Ecommerce, Lifestyle or Event photography, we've got you covered.</p></span>
                        <div className="scc-btn-container">
                            <button className="scc-btn" onClick={handleClick1}>Book Service</button>
                        </div>
                    </div>
                </div>
                <div className="scc-content-box">
                    <div className="scc-img-container">
                        <img src={sc2} alt="" className="scc-img" />
                    </div>
                    <div className="scc-text_btn-container">
                        <span className="scc-text1-container"><p className="scc-text1">Videograhy</p></span>
                        <span className="scc-t1-subtext-container"><p className="scc-sbt">Advertisement, Fashion, Ecommerce, Event coverage, Motion graphics services available.</p></span>
                        <div className="scc-btn-container">
                            <button className="scc-btn" onClick={handleClick2}>Book Service</button>
                        </div>
                    </div>
                </div>
                <div className="scc-content-box">
                    <div className="scc-img-container">
                        <img src={sc3} alt="" className="scc-img" />
                    </div>
                    <div className="scc-text_btn-container">
                        <span className="scc-text1-container"><p className="scc-text2">Studio Rentals</p></span>
                        <span className="scc-t1-subtext-container"><p className="scc-sbt2">With cutting-edge cameras, versatile lighting setups, a fully equipped editing suite our studio is designed to meet all your content creation needs.
</p></span>
                        <div className="scc-btn-container">
                            <button className="scc-btn" onClick={handleClick3}>Book Service</button>
                        </div>
                    </div>
                </div>
                <div className="scc-content-box">
                    <div className="scc-img-container">
                        <img src={sc4} alt="" className="scc-img" />
                    </div>
                    <div className="scc-text_btn-container">
                        <span className="scc-text1-container"><p className="scc-text1">Content Creators</p></span>
                        <span className="scc-t1-subtext-container"><p className="scc-sbt">Our male and female models are professionals with experience in various genres of photography.</p></span>
                        <div className="scc-btn-container">
                            <button className="scc-btn" onClick={handleClick4}>Book Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesContentCmp;