/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QuizItem } from '../../components/';
import styles from './QuizScroller.scss';
import { SUB_TOPICS } from '../../constant';

export default class QuizScroller extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    activeQuestion: PropTypes.number.isRequired,
    completedQuiz: PropTypes.object.isRequired,
    checkQuizItem: PropTypes.func.isRequired,
    changeQuizItem: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      lineOffset: 0
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.calcLinePosition);
    this.calcLinePosition();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.activeQuestion !== nextProps.activeQuestion) {
      this.calcLinePosition(null, nextProps.activeQuestion);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.calcLinePosition);
  }
  calcLinePosition = (e, nextItemIndex) => {
    const wWidth = window.innerWidth;
    const itemWidth = wWidth * 0.8;
    const itemIndex = nextItemIndex === undefined ? this.props.activeQuestion : nextItemIndex;
    this.setState({
      lineOffset: - itemWidth * itemIndex
    });
  };

  renderItem = (item, itemIndex) => {
    const isComplete = this.props.completedQuiz[itemIndex];
    const isActive = this.props.activeQuestion === itemIndex;
    return (
      <QuizItem
        key={item.title}
        type="screen"
        isComplete={isComplete}
        isActive={isActive}
        title={`${itemIndex + 1}. ${item.title}`}
        onButtonClick={() => this.props.checkQuizItem({quizIndex: itemIndex, completed: !isComplete})}
      />
    );
  };

  render() {
    return (
      <div className={styles.scroller}>
        <div className={styles.scrollerLine} style={{transform: `translateX(${this.state.lineOffset}px)`}}>
          {SUB_TOPICS.map(this.renderItem)}
        </div>
      </div>
    );
  }
}
