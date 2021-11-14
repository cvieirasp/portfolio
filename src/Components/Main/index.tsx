import React from 'react';
import HomePage from '../../Pages/HomePage';
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

      <HomePage />

    </MainStyled>
  );
};

export default Main;
