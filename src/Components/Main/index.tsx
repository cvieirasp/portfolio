import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../Pages/About';
import BlogPage from '../../Pages/Blog';
import ContactPage from '../../Pages/Contact';
import HomePage from '../../Pages/Home';
import PortfoliosPage from '../../Pages/Portfolios';
import ResumePage from '../../Pages/Resume';
import MainStyled from './style';

const Main = function () {
  return (
    <MainStyled>
      <div className="lines">
        <div className="line-1">{' '}</div>
        <div className="line-2">{' '}</div>
        <div className="line-3">{' '}</div>
        <div className="line-4">{' '}</div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolios" element={<PortfoliosPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </MainStyled>
  );//
};

export default Main;
