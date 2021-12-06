import React from 'react';
import PrimaryButtonStyled from './style';

interface Params {
  title: string;
}

const PrimaryButton = function ({ title }: Params) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  );
};

export default PrimaryButton;
