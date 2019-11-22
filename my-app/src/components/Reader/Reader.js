import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import s from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
  };
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  state = {
    step: 0,
  };

  handleIncrement = e => {
    const { items } = this.props;
    this.setState(state => {
      if (state.step < items.length) {
        return {
          step: state.step + 1,
        };
      }
    });
  };

  handleDecrement = e => {
    this.setState(state => {
      if (state.step > 0) {
        return {
          step: state.step - 1,
        };
      }
    });
  };

  render() {
    const { step } = this.state;
    const { items } = this.props;

    return (
      <div className={s.reader}>
        <Controls
          disabledButtonNext={step === items.length - 1}
          disabledButtonPrev={step === 0}
          step={step}
          decrement={this.handleDecrement}
          increment={this.handleIncrement}
        />

        <Counter step={step + 1} />
        <Publication items={items[step]} />
      </div>
    );
  }
}
