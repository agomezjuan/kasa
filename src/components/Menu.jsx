import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  let activeClassName = 'active';
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
