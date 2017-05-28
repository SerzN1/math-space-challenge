/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QuizItem } from '../../components/';
import styles from './QuizMozaic.scss';
import { SUB_TOPICS } from '../../constant';

export default class QuizMozaic extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    activeQuestion: PropTypes.number.isRequired,
    completedQuiz: PropTypes.object.isRequired,
    checkQuizItem: PropTypes.func.isRequired,
    changeQuizItem: PropTypes.func.isRequired,
  };

  renderItem = (item, itemIndex) => {
    const isComplete = this.props.completedQuiz[itemIndex];
    const isActive = this.props.activeQuestion === itemIndex;
    return (
      <QuizItem
        key={item.title}
        isComplete={isComplete}
        isActive={isActive}
        title={`${itemIndex + 1}. ${item.title}`}
        onButtonClick={() => this.props.checkQuizItem({quizIndex: itemIndex, completed: !isComplete})}
      />
    );
  };

  render() {
    return (
      <div className={styles.mozaicWrap}>
        {SUB_TOPICS.map(this.renderItem)}
      </div>
    );
  }
}
