import React from 'react';
import PropTypes from 'prop-types';

function Content({ children }) {
  return (
    <main className="App-content">
      {children}
    </main>
  );
}

Content.defaultProps = {
  children: null,
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
