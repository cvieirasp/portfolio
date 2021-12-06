import React from 'react';
import Title from '../../Components/Title';
import ImageSection from '../../Components/ImageSection';
import { MainLayout } from '../../styles/Layouts';
import AboutStyled from './style';

const About = function () {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title="Sobre mim" span="Sobre mim" />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default About;
