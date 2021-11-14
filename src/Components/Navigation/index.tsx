import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationStyled from './style';
import Avatar from '../../images/avatar.jpg';

const Navigation = function () {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={Avatar} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-class' : '')} end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-class' : '')} end>
            Sobre
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active-class' : '')} end>
            Currículo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" className={({ isActive }) => (isActive ? 'active-class' : '')} end>
            Portfólios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active-class' : '')} end>
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-class' : '')} end>
            Contato
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 Meu Portfólio</p>
      </footer>
    </NavigationStyled>
  );
};

export default Navigation;
