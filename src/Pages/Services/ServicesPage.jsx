import React from 'react';
import Navbar from './Components/services-header/Services-header';
import Footer from '../HomePage/Components/Footer/FooterNew';
import MainPic from './Components/MainPic/MainPic';
import LWT from '../ContentCreators/Components/LetsWorkTogether/LWT';
import ServicesContentCmp from './Components/ServicesContentCmp/ServicesContentCmp';

const ServicesPages = () => {
    return (
        <div>
            <Navbar/>
            <MainPic/>
            <ServicesContentCmp/>
            <LWT/>
            <Footer/>
        </div>
    );
};

export default ServicesPages;