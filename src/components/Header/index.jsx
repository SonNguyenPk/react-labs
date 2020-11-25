import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <ul className="header__menu">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/box">Magic Box</NavLink>
        </li>
        <li>
          <NavLink to="/rendering">Rendering </NavLink>
        </li>
        <li>
          <NavLink to="/color">ColorBox</NavLink>
        </li>
        <li>
          <a href="https://zingmp3.vn/" target="_blank" rel="noopener noreferrer">
            go to zing mp3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
