import React from 'react';
import './FooterStyles.css';
import diyar2 from '../../../../assets/homepage/diyar _2.jpg';
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="fc-content">
                <div className="row1-container">
                    <div className="diyar-_2">
                        <img src={diyar2} alt="diyar-std-img2" className='diyar-_2'/>
                    </div>
                    <span className="phone-number"><a href="tel:+971505050505" className='phone-number'>Ph: +971-505050505</a></span>
                    <span className='location'><a href='https://goo.gl/maps/KPCrujKVq1rYRvn8A' className='location' target=' '>Dilan Tower, Office #3, Al Jaddaf, Dubai</a></span>
                    <span className='email-footer'><a href='mailto:xyz@gmail.com' className='email-footer'>xyz@gmail.com</a></span>
                </div>
                <div className="row2-container">
                    <div className="footer-ab"><h6 className="footer-about">About</h6></div>
                    <span className="footer-aboutUs"><a href='/about-us' className='footer-aboutUs' target=' '>About Us</a></span>
                    <span className="footer-contactUs"><a href='/contact-us/lets+work+together' className='footer-contactUs'>Contact Us</a></span>
                    <span className="footer-privacyPolicy"><a href='/' className='footer-privacyPolicy' target=' '>Privacy Policy</a></span>
                </div>
                <div className="row3-container">
                    <div className="footer-exp"><h6 className="footer-explore">Explore</h6></div>
                    <span className="footer-services"><a href='/services' className='footer-services' target=' '>Services</a></span>
                    <span className="footer-pricing"><a href='/contact-us/request+a+quote' className='footer-pricing' target=' '>Pricing</a></span>
                    <span className='footer-careers'><a href="/careers2" className="footer-careers" target=' '>Careers</a></span>
                </div>
                <div className="row4-container">
                    <div className="footer-git"><h6 className="footer-getInTouch">Get in touch with us</h6></div>
                    <div className="inp-container">
                        <input type='text' placeholder='Your email' className='inp-field'/>
                        <div className="button">
                            <a href='/' className='footer-submit-btn'>Submit</a>
                            <div className="footer-line-btn"></div>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                </div>
                <div className="row5-container">
                    <div className="row5-title"><h6 className="footer-followUs">Follow Us</h6></div>
                    <div className="footer-fu">
                        <div className="footer-media-links"><FaInstagram className='ff-insta'/></div>
                        <div className='footer-media-links'><FaFacebookF className='ff-fb'/></div>
                        <div className='footer-media-links'><FaYoutube className='ff-yt'/></div>
                        <div className="footer-media-links"><FaPinterestP className='ff-pinterest'/></div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">&copy; 2023 - All Rights Reserved | Developed by <a href='https://www.hashgate.ae' target=' ' className='footer-hashgate'>HashGate Technologies</a></div>
        </div>
    )
}

export default Footer;