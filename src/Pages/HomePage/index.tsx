import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../../Components/Particle';
import HomePageStyled from './style';

const HomePage = function () {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Olá! Eu sou
          {' '}
          <span>Carlinhos do Ruim</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque nihil voluptates ea dolore vel
          repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
        </p>
        <div className="icons">
          <a href="https://codepen.io/pen/" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://codepen.io/pen/" className="icon i-linkedin">
            <LinkedInIcon />
          </a>
          <a href="https://codepen.io/pen/" className="icon i-youtube">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
