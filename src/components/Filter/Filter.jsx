import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <label className={css.label}>
        {' '}
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          title="Enter first letters or numbers"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
