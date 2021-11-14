import React from 'react';
import Navigation from '../Navigation';
import SidebarStyled from './style';

const Sidebar = function () {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
};

export default Sidebar;
