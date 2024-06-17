import React from 'react';
import './VideocmpStyles.css';
import vid4 from './Comp_2.gif';
import vid5 from './Comp_2_AdobeExpress (1).gif';

const Videocmp = () => {
  const handleClick = () => {
    return (
      window.location.href = '#hmpg-our-services'
    );
  };
  
  return (
    <div className="video-container">
      <img src={vid4} alt="" className="hmpg-vid" />
      <img src={vid5} alt="" className="hmpg-vid mobile" />
      <div className="video-overlay">
        <h1 className='vo-text'>Explore.</h1>
        <h1 className='vo-text'>Create.</h1>
        <h1 className='vo-text'>Inspire.</h1>
        <button className='vo-button' onClick={handleClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Videocmp;
