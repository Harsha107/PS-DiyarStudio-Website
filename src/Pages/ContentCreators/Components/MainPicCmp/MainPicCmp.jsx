import React from 'react';
import './MainPicCmpStyles.css';
import mp1 from '../../../../assets/michael-sala-husQ4tkR8Z8-unsplash.jpg';

const MainPicCmp = () => {
    return (
        <div className="mpcmp-img-container">
            <img src={mp1} alt="" className="mpcmp-img" />
            <div className="mpcmp-overlay">
                <h1 className="mpcmp-overlay-text">Content Creators</h1>
            </div>
        </div>
    );
};

export default MainPicCmp;