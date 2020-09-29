import React from 'react';
import PropTypes from 'prop-types';

const NavbarComponent = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
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
