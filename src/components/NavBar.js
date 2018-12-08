import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
export const NavBar = ({ location, favourites }) => (
  <nav className="navbar sticky-top navbar-light bg-light navbar-expand">
    <a className="navbar-brand" href="/">
      Infinite Scroll
    </a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        {[
          { label: 'New Photos', path: '/' },
          { label: `Favourites (${favourites.size})`, path: '/favourites' },
        ].map(item => (
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

export default withRouter(
  inject(({ appState }) => ({
    favourites: appState.favourites,
  }))(observer(NavBar))
);
