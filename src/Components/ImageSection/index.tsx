import React from 'react';
import resume from '../../images/resume.jpg';
import PrimaryButton from '../PrimaryButton';
import ImageSectionStyled from './style';

const ImageSection = function () {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am
          {' '}
          <span>Lorem Ipsum</span>
        </h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim
          praesentium delectus est id fugiat ab libero adipisci recusandae at maxime veritatis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, nesciunt.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Lorem Ipsum</p>
            <p>: 36</p>
            <p>: Spainsh </p>
            <p>: Spanish, French, English </p>
            <p>: London, United Kingdom</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title="Download Cv" />
      </div>
    </ImageSectionStyled>
  );
};

export default ImageSection;
