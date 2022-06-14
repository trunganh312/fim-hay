import React from 'react';
import './navbar.scss';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar__icon">
        <Link to="/">
          <FaGithub />
        </Link>
        <Link to="/">
          <p className="navbar__text">Github Finder</p>
        </Link>
      </div>
      <div className="navbar__link">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
