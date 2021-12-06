import React from 'react';
import TitleStyled from './style';

interface Params {
  title: string;
  span: string;
}

const Title = function ({ title, span } : Params) {
  return (
    <TitleStyled>
      <h2>
        {title}
        {' '}
        <b><span>{span}</span></b>
      </h2>
    </TitleStyled>
  );
};

export default Title;
