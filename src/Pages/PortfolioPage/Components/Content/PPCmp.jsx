import React from 'react';
import './PPCmpStyles.css';
import pf1 from '../../../../assets/portfolio/6.png';
import pf2 from '../../../../assets/portfolio/4.png';
import pf3 from '../../../../assets/portfolio/1.png';
import pf4 from '../../../../assets/portfolio/1 (1).png';
import pf5 from '../../../../assets/portfolio/12.png';
import pf6 from '../../../../assets/portfolio/4 (1).png';
import pf7 from '../../../../assets/portfolio/5.png';
import pf8 from '../../../../assets/portfolio/1 (2).png';
import pf9 from '../../../../assets/portfolio/9.png';
import pf10 from '../../../../assets/portfolio/8.png';
import pf11 from '../../../../assets/portfolio/2.png';
import pf12 from '../../../../assets/portfolio/7.png';
import pf13 from '../../../../assets/portfolio/3.png';
import pf14 from '../../../../assets/portfolio/14.png';

const PPCmp = () => {
    return (
        <div className='ppcmp-container' style={{marginBottom: '60px'}}>
            <div className="ppcmp-img-container">
                <div className="ppcmp-img-row">
                    <div className="ppcmp-leftImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf1} alt="" className="ppcmp-img1" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                    <div className="ppcmp-rightImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf2} alt="" className="ppcmp-img2" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
                <div className="ppcmp-img-row">
                    <div className="ppcmp-leftImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf3} alt="" className="ppcmp-img3" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                    <div className="ppcmp-rightImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf4} alt="" className="ppcmp-img4" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
                <div className="ppcmp-img-row">
                    <div className="ppcmp-leftImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf5} alt="" className="ppcmp-img5" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                    <div className="ppcmp-rightImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf6} alt="" className="ppcmp-img6" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
                <div className="ppcmp-img-row">
                    <div className="ppcmp-leftImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf7} alt="" className="ppcmp-img7" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                    <div className="ppcmp-rightImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf8} alt="" className="ppcmp-img8" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
                <div className="ppcmp-img-row">
                    <div className="ppcmp-leftImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf9} alt="" className="ppcmp-img9" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                    <div className="ppcmp-rightImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf10} alt="" className="ppcmp-img10" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
                <div className="ppcmp-img-row">
                    <div className="ppcmp-leftImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf11} alt="" className="ppcmp-img11" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                    <div className="ppcmp-rightImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf12} alt="" className="ppcmp-img12" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
                <div className="ppcmp-img-row">
                    <div className="ppcmp-leftImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf13} alt="" className="ppcmp-img13 last" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                    <div className="ppcmp-rightImg-container">
                        <div className="ppcmp-img-overlay">
                            <img src={pf14} alt="" className="ppcmp-img14 last" />
                            <div className="ppcmp-img-text">Lorem, ipsum.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PPCmp;