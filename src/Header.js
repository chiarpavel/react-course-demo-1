import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

function Header({ title }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
