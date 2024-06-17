import React from 'react';
import Navbar from '../HomePage/Components/Navbar/Navbar';
import Footer from '../HomePage/Components/Footer/FooterNew';
import CareersMainPic from './Components/CareersMainPic/CareersMainPic';
import Careers1Content from './Components/Careers1Content/Careers1Content';

const Careers_1 = () => {
    return (
        <div>
            <Navbar/>
            <CareersMainPic/>
            <Careers1Content/>
            <Footer/>
        </div>
    );
};

export default Careers_1;