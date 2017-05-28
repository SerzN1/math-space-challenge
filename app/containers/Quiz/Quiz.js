/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Pager, QuizMozaic, QuizScroller } from '../../components/';
import { checkQuizItem, changeQuizItem } from '../../actions';
import styles from './Quiz.scss';
import { SUB_TOPICS } from '../../constant';

export class Quiz extends Component {
  static propTypes = {
    activeQuestion: PropTypes.number.isRequired,
    completedQuiz: PropTypes.object.isRequired,
    checkQuizItem: PropTypes.func.isRequired,
    changeQuizItem: PropTypes.func.isRequired,
  };

  render() {
    const {activeQuestion} = this.props;
    return (
      <div className={styles.cardPage}>
        <MediaQuery query="(max-width: 800px)" style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
          <Pager
            className={styles.pager}
            pages={SUB_TOPICS.length}
            active={activeQuestion}
            completed={this.props.completedQuiz}
            handleChange={this.props.changeQuizItem}
          />
          <QuizScroller {...this.props} items={SUB_TOPICS} />
        </MediaQuery>
        <MediaQuery query="(min-width: 801px)">
          <QuizMozaic {...this.props} items={SUB_TOPICS} />
        </MediaQuery>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    completedQuiz: state.quiz.completedQuiz,
    activeQuestion: state.quiz.activeQuestion,
  }),
  {
    checkQuizItem,
    changeQuizItem,
  }
)(Quiz);
