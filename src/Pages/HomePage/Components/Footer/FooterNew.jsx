import React from 'react';
import './FooterStylesNew.css';
import diyar2 from '../../../../assets/homepage/diyar _2.jpg';
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footerNew-whole-container">
            <div className="footerNew-column1-container">
                <div className="fcNew-logo-row-container">
                    <div className="new-row1-container">
                        <div className="nr1-img-container">
                            <img src={diyar2} alt="diyar2" className='nr1-img'/>
                        </div>
                        <div className="nr1-under-container">
                            <span className="fcNew-pNo">Phone: +971 505050505</span>
                            <span className="fcNew-location">Dilan Tower, Office #3, Al Jaddaf, Dubai</span>
                            <span className="fcNew-mail">xyz@gmail.com</span>
                            <span className="fcNew-mobile">Dilan Tower, Office #3, Al Jaddaf, Dubai</span>
                        </div>
                    </div>
                </div>
                <div className="fcNew-restCont-container">
                    <div className="new-row2-container">
                        <span className="nr2-title">About</span>
                        <span className="nr2-content"><a href='/about-us' style={{textDecoration: 'none'}} className='nr-a-hover'>About us</a></span>
                        <span className="nr2-content"><a href='/contact-us/lets+work+together'style={{textDecoration: 'none'}} className='nr-a-hover'>Contact us</a></span>
                        <span className="nr2-content"><a href='/' style={{textDecoration: 'none'}} className='nr-a-hover'>Privacy Policy</a></span>
                    </div>
                    <div className="new-row3-container">
                        <span className="nr3-title">Explore</span>
                        <span className="nr3-content services"><a href='/services' style={{textDecoration: 'none'}} className='nr-a-hover'>Services</a></span>
                        <span className="nr3-content"><a href='/contact-us/request+a+quote' style={{textDecoration: 'none'}} className='nr-a-hover'>Pricing</a></span>
                        <span className="nr3-content"><a href='/careers2' style={{textDecoration: 'none'}} className='nr-a-hover'>Careers</a></span>
                    </div>
                    <div className="new-row4-container">
                        <div className="nr4-container1">
                            <span className="nr4-title1">Get in touch with us</span>
                            <div className="nr4-inp-container">
                                <input type="email" placeholder='Your email' className='nr4-inpt'/>
                                <div className="nr4-line"></div>
                                <div className="nr4-btn-container" style={{margin: '-30px 0 0 200px'}}>
                                    <button className='nr4-btn'>Submit</button>
                                    <div className="nr4-btn-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="nr4-container2">
                            <div className="nr4-title2">Follow us</div>
                            <div className="nr4-content-container">
                                <div className="nr4-content"><FaInstagram className='nr4-cont'/></div>
                                <div className="nr4-content"><FaFacebookF className='nr4-cont'/></div>
                                <div className="nr4-content"><FaYoutube className='nr4-cont'/></div>
                                <div className="nr4-content"><FaPinterestP className='nr4-cont'/></div>
                            </div>                
                        </div>
                        <div className="nr4-container2-mobile">
                            <div className="nr4-title2">Follow us on</div>
                            <div className="nr4-content-mobile"><FaYoutube style={{color: '#b1953b'}}/> Youtube</div>
                            <div className="nr4-content-mobile"><AiFillFacebook style={{color: '#b1953b'}}/> Facebook</div>
                            <div className="nr4-content-mobile"><AiFillInstagram style={{color: '#b1953b'}}/> Instagram</div>
                            <div className="nr4-content-mobile"><BsPinterest style={{color: '#b1953b'}}/> Pinterest</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerNew-column2-container">
                <span className="fNew-copy">&copy; 2023 - All Rights Reserved | Developed by <a href='https://www.hashgate.ae' target=' ' className='fNew-hashgate'>HashGate Technologies</a></span>
            </div>
        </div>
    )
}

export default Footer;