import React from 'react';
import Navbar from '../HomePage/Components/Navbar/Navbar';
import Footer from '../HomePage/Components/Footer/FooterNew';
import CareersMainPic from '../Careers_1/Components/CareersMainPic/CareersMainPic';
import Career2Content from './Components/Careers2Content/Careers2Content';

const Careers_2 = () => {
    return (
        <div>
            <Navbar/>
            <CareersMainPic/>
            <Career2Content/>
            <Footer/>
        </div>
    );
};

export default Careers_2;