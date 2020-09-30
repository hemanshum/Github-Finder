import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavbarComponent = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

NavbarComponent.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fa fa-github',
};

NavbarComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavbarComponent;
