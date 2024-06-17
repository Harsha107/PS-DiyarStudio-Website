import React, { useRef } from 'react';
import './HeroCmpSliderStyles.css';
import hcc1 from '../../../../assets/hmg_hcc/11.jpg';
import hcc2 from '../../../../assets/hmg_hcc/VIDEO.jpg';
import hcc3 from '../../../../assets/hmg_hcc/SR.jpg';
import hcc4 from '../../../../assets/hmg_hcc/CC.jpg';
import hccm1 from '../../../../assets/homepage/11_mob.jpg';
import hccm2 from '../../../../assets/homepage/VIDEO_mob.jpg';
import hccm3 from '../../../../assets/homepage/SR_mob.jpg';
import hccm4 from '../../../../assets/homepage/CC_mob.jpg';



const HeroCmpSlider = () => {
    const containerRef = useRef(null);

    const handleScroll = () => {
        const {scrollLeft, scrollWidth, clientWidth} = containerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollLeft >= maxScrollLeft) {
            console.log('Load more services');
        }
    }

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
        )
    }

    const handleClick4 = () => {
        return (
            window.location.href = '/content-creators'
        )
    }

    return (
        <div className="hero-cmp-slider-container">
            <div className="hcc-slide-cmp-container" ref={containerRef} onScroll={handleScroll}>
                    
                        <div className="hero-cmp-content-box">
                            <div className="hcc-img-container">
                                <img src={hcc1} alt="" className="hcc-img" />
                                <img src={hccm1} alt="" className="hcc-img mobile" />
                            </div>
                            <div className="hcc-text_btn-container">
                                <span className="hcc-text-container"><p className="hcc-text">Photography</p></span>
                                <span className="hcc-sbt-container"><p className="hcc-sbt">Fashion, Still life, Editorial, Ecommerce, Lifestyle or Event photography, we've got you covered.</p></span>
                                <div className="hcc-btn-container">
                                    <button className="hcc-btn" onClick={handleClick1}>See More</button>
                                </div>
                            </div>
                        </div>

                        <div className="hero-cmp-content-box">
                            <div className="hcc-img-container">
                                <img src={hcc2} alt="" className="hcc-img" />
                                <img src={hccm2} alt="" className="hcc-img mobile" />
                            </div>
                            <div className="hcc-text_btn-container">
                                <span className="hcc-text-container"><p className="hcc-text">Videography</p></span>
                                <span className="hcc-sbt-container"><p className="hcc-sbt">Advertisement, Fashion, Ecommerce, Event coverage, Motion graphics services are available.</p></span>
                                <div className="hcc-btn-container">
                                    <button className="hcc-btn" onClick={handleClick2}>See More</button>
                                </div>
                            </div>
                        </div>

                        <div className="hero-cmp-content-box">
                            <div className="hcc-img-container">
                                <img src={hcc3} alt="" className="hcc-img" />
                                <img src={hccm3} alt="" className="hcc-img mobile" />
                            </div>
                            <div className="hcc-text_btn-container">
                                <span className="hcc-text-container"><p className="hcc-text">Studio Rentals</p></span>
                                <span className="hcc-sbt-container"><p className="hcc-sbt">With cutting-edge cameras, versatile lighting setups our studio is designed to meet all your content creation needs.</p></span>
                                <div className="hcc-btn-container">
                                    <button className="hcc-btn" onClick={handleClick3}>See More</button>
                                </div>
                            </div>
                        </div>

                        <div className="hero-cmp-content-box">
                            <div className="hcc-img-container">
                                <img src={hcc4} alt="" className="hcc-img" />
                                <img src={hccm4} alt="" className="hcc-img mobile" />
                            </div>
                            <div className="hcc-text_btn-container">
                                <span className="hcc-text-container"><p className="hcc-text">Content Creators</p></span>
                                <span className="hcc-sbt-container"><p className="hcc-sbt">Our male and female models are professionals with experience in various genres of photography.</p></span>
                                <div className="hcc-btn-container">
                                    <button className="hcc-btn" onClick={handleClick4}>See More</button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default HeroCmpSlider;