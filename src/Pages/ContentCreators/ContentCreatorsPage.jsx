import React from 'react';
import Navbar from './Components/contentCreators-header/ContentCreators-header';
import Footer from '../HomePage/Components/Footer/FooterNew';
import MainPicCmp from './Components/MainPicCmp/MainPicCmp';
import ModelsCmp from './Components/ModelsCmp/ModelsCmpNew';
import LWT from './Components/LetsWorkTogether/LWT';

const ContentCreatorsPage = () => {
    return (
        <div>
            <Navbar/>
            <MainPicCmp/>
            <ModelsCmp/>
            <LWT/>
            <Footer/>
        </div>
    );
};

export default ContentCreatorsPage;