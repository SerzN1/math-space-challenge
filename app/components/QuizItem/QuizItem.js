import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './QuizItem.scss';

export default class QuizItem extends Component {
  static propTypes = {
    isComplete: PropTypes.bool,
    isActive: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func,
    type: PropTypes.string,
  };
  static defaultProps = {
    isComplete: false,
    isActive: false,
    onButtonClick: () => {},
    type: 'card',
  };
  render() {
    const {isActive, isComplete, title, type} = this.props;
    const wrapClassName = type === 'card' ? styles.itemCard : styles.itemScreen;
    const activeClassName = isActive ? styles.active : '';
    return (
      <div className={`${wrapClassName} ${activeClassName}`}>
        <div className={styles.quizItem}>
          <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            {isComplete ?
              <div className={styles.complete}>
                <img
                  display-if={isComplete}
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/tick-big.svg"
                  alt=""
                />
              </div> :
              <div className={styles.notComlete} />
            }
          </div>
          <div className={styles.buttonWrap}>
            <button
              type="button"
              className={styles.button}
              onClick={this.props.onButtonClick}
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
    );
  }
}
