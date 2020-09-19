import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(typeBtn => (
        <button
          key={typeBtn}
          type="submit"
          className={styles.button}
          onClick={() => onLeaveFeedback(typeBtn)}
        >
          {typeBtn}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
