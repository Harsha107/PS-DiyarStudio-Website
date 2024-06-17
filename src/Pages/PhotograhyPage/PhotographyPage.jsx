import React from 'react';
import Navbar from '../HomePage/Components/Navbar/Navbar';
import Footer from '../HomePage/Components/Footer/FooterNew';
import PPMainPic from './Components/PPMainPic/PPMainPic';
import PPContent from './Components/PPContent/PPContent';

const PhotographyPage = () => {
    return (
        <div>
            <Navbar/>
            <PPMainPic/>
            <PPContent/>
            <Footer/>
        </div>
    );
};


export default PhotographyPage;