import React, { useState } from 'react';
import diyarStdPic from '../../../../assets/homepage/diyar (1).png';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const NavBar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <div className='navbar-container'>
      <div className="top-nav">
        <span className="nav-photography">
            <a href="/photography" className="tn-link1"><h4 style={{textDecoration: 'underline', textDecorationColor: '#fff', textUnderlineOffset: '0.4em'}}>Photography</h4></a>
        </span>
        <span className="nav-videography"><a href="/videography" className="tn-link2"><h4>Videography</h4></a></span>
        <span className="nav-studioRentals"><a href="/studio-rentals" className="tn-link3"><h4>Studio Rentals</h4></a></span>
        <span className="nav-contentCreators"><a href="/content-creators" className="tn-link4"><h4>Content Creators</h4></a></span>
      </div>
      <div className="below-nav">
        <div className="diyar-_1"><a href='/'><img src={diyarStdPic} alt="" className="diyar-std-img1" /></a></div>
        <div className="nav-content-container">
          <ul className="nav-uList">
            <li className="bn-about"><a href="/about-us" className='bn-list-item' style={{textDecoration: 'none'}}>About</a></li>
            <li className="bn-services"><a href="/services" className='bn-list-item' style={{textDecoration: 'none'}}>Services</a></li>
            <li className="bn-portfolio"><a href="/portfolio" className='bn-list-item' style={{textDecoration: 'none'}}>Portfolio</a></li>
            <li className="bn-contact"><a href="/contact-us/lets+work+together" className='bn-list-item' style={{textDecoration: 'none'}}>Contact</a></li>
          </ul>
          {Mobile &&
          <ul className="mobile-nav-uList" onClick={() => setMobile(false)}>
            <li className="mnuList-photography"><a href="/photography" className="mn-link1">Photography</a></li>
            <li className="mnuList-videography"><a href="/videography" className="mn-link1">Videography</a></li>
            <li className="mnuList-studioRentals"><a href="/studio-rentals" className="mn-link1">Studio Rentals</a></li>
            <li className="mnuList-contentCreators"><a href="/content-creators" className="mn-link1">Content Creators</a></li>
          </ul>}
        </div>
        <button className="nav-mobile-btn" onClick={() => setMobile(!Mobile)} style={{cursor: 'pointer'}}>
          {Mobile ? <RxCross2/> : <FaBars/>}
        </button>
      </div>
    </div>
  );
};

export default NavBar;