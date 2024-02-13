import React from 'react';
import styles from './styles.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      {options.map(item => (
        <button
          type="button"
          value={item.toLowerCase()}
          key={item}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
