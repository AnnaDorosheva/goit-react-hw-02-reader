import React from 'react';
import PropTypes from 'prop-types';
import s from './Counter.module.css';

const Counter = ({ step }) => <p className={s.counter}>{step}/12</p>;

Counter.propTypes = {
  step: PropTypes.number,
};
export default Counter;
