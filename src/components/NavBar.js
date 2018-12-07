import React from 'react';
import { Link, withRouter } from 'react-router-dom';
export const NavBar = ({ items, location }) => (
  <nav className="navbar sticky-top navbar-light bg-light navbar-expand">
    <a className="navbar-brand" href="/">
      Infinite Scroll Demo
    </a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        {items.map(item => (
          <li
            key={item.label}
            className={`nav-item ${location.pathname === item.path &&
              'active'}`}
          >
            <Link className="nav-link" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default withRouter(NavBar);
