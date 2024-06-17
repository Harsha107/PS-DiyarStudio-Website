import React, { useRef } from 'react';
import './WhatOthersSayStyles.css';
import pedro from '../../../../assets/homepage/pedro.jpg';
import {BiSolidQuoteAltLeft} from 'react-icons/bi';

const WhatOthersSay = () => {

    const containerRef = useRef(null);

    const handleScroll = () => {
        const {scrollLeft, clientWidth, scrollWidth} = containerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollLeft >= maxScrollLeft) {
            console.log('Load more cards');
        }
    }

    return (
        <div className='whatOS-container'>
            <div className="whatOs-cont-container">
                <div className="wos-title-container"><h1 className='wos-title'>What our clients say.</h1></div>
                <div className="wos-container" ref={containerRef} onScroll={handleScroll}>
                    <div className="wos-comment-box">
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>
                            <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>
                            <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                    </div>
                    <div className="wos-comment-box">
                        <div className="wos-comment1">                                <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>
                            <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>                                <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                    </div>
                    <div className="wos-comment-box">
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>                                <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>
                            <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                    </div>
                    <div className="wos-comment-box">
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>
                            <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>                                <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                    </div>
                    <div className="wos-comment-box">
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>
                            <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                        <div className="wos-comment1">
                            <span className="wos-quotes"><BiSolidQuoteAltLeft className='wos-quote-icon' /></span>
                            <span className="wos-comment-text-container"><p className="wos-comment-text">These guys are amazing lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p></span>
                            <div className="wos-comment-img-container">
                                <img src={pedro} alt="" className="wos-comment-img" />
                            </div>
                            <span className="wosc-name-container"><p className="wosc-name">John Doe</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatOthersSay;