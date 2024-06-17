import React from 'react';
import './PhotoPortfolioCmpStyles.css';
import pf1 from '../../../../assets/homepage/6.png';
import pf2 from '../../../../assets/homepage/4.png';
import pf3 from '../../../../assets/homepage/1.png';
import pf4 from '../../../../assets/homepage/1 (2).png';

const PhotoPortfolioCmp = () => {
    return (
        <div className='pf-cmp-container another-one'>
            <div className="photo-pf-title-container"><h1 className="photo-pf-title">Our Work</h1></div>
            <div className="pf-img-container">
                <div className="pf-img-row">
                    <div className="pf-img1-container">
                        <div className="pf-img-overlay">
                            <img src={pf1} alt="" className="pf-img1" />
                            <div className="img-text">Editorial</div>
                        </div>
                    </div>
                    <div className="pf-img2-container">
                        <div className="pf-img-overlay">
                            <img src={pf2} alt="" className="pf-img2" />
                            <div className="img-text">Fashion</div>
                        </div>
                    </div>
                </div>
                <div className="pf-img-row">
                    <div className="pf-img3-container">
                        <div className="pf-img-overlay">
                            <img src={pf3} alt="" className="pf-img3" />
                            <div className="img-text">LifeStyle</div>
                        </div>
                    </div>
                    <div className="pf-img4-container">
                        <div className="pf-img-overlay">
                            <img src={pf4} alt="" className="pf-img4" />
                            <div className="img-text"><a href="/portfolio" className="pf-img4-seeMore">See More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoPortfolioCmp;
