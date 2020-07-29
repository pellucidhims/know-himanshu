import React from 'react';
import TrackVisibility from 'react-on-screen';
import PropTypes from 'prop-types';

const VisiblityWrapper = ({ children }) => {
  return (
    <TrackVisibility once partialVisibility>
      {({ isVisible }) => isVisible && children}
    </TrackVisibility>
  );
};

VisiblityWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VisiblityWrapper;
