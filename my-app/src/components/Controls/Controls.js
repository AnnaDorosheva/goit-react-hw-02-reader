import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({
  increment,
  decrement,
  disabledButtonPrev,
  disabledButtonNext,
}) => (
  <section className={s.controls}>
    <button
      type="button"
      className={s.button}
      disabled={disabledButtonPrev}
      onClick={decrement}
    >
      Назад
    </button>

    <button
      type="button"
      className={s.button}
      disabled={disabledButtonNext}
      onClick={increment}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  step: PropTypes.number.isRequired,
  disabledButtonPrev: PropTypes.bool.isRequired,
  disabledButtonNext: PropTypes.bool.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
export default Controls;
