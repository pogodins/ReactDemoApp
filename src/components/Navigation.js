import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li data-testid="tab.mountain">
          <NavLink to="/mountain" id>
            Mountain
          </NavLink>
        </li>
        <li data-testid="tab.beach">
          <NavLink to="/beach">bird</NavLink>
        </li>
        <li data-testid="tab.bird">
          <NavLink to="/bird">Birds</NavLink>
        </li>
        <li data-testid="tab.food">
          <NavLink to="/food">Food</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
