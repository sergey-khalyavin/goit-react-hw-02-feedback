import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.defaultProps = {
  title: 'Section Title',
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
