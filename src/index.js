import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import ContentCreatorsPage from './Pages/ContentCreators/ContentCreatorsPage';
import ServicesPages from './Pages/Services/ServicesPage';
import ContactUsLWT from './Pages/ContactUs-LWT/ContactUsLWT';
import ContactUsRAQ from './Pages/ContactUs-RAQ/ContactUsRAQ';
import PhotographyPage from './Pages/PhotograhyPage/PhotographyPage';
import AboutUsPage from './Pages/AboutUs/AboutUsPage';
import Photography from './Pages/Photography/Photography';
import Videography from './Pages/Videography/Videography';
import StudioRentals from './Pages/StudioRentals/StudioRentals';
import Careers1 from './Pages/Careers_1/Careers1';
import Careers2 from './Pages/Careers_2/Careers2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/portfolio',
    element: <PortfolioPage/>
  },
  {
    path: '/content-creators',
    element: <ContentCreatorsPage/>
  },
  {
    path: '/services',
    element: <ServicesPages/>
  },
  {
    path: '/contact-us/lets+work+together',
    element: <ContactUsLWT/>
  }, 
  {
    path: '/contact-us/request+a+quote',
    element: <ContactUsRAQ/>
  },
  {
    path: '/more-info',
    element: <PhotographyPage/>
  },
  {
    path: '/about-us',
    element: <AboutUsPage/>
  },
  {
    path: '/photography',
    element: <Photography/>
  },
  {
    path: '/videography',
    element: <Videography/>
  },
  {
    path: '/studio-rentals',
    element: <StudioRentals/>
  },
  {
    path: '/careers1',
    element: <Careers1/>
  },
  {
    path: '/careers2',
    element: <Careers2/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);