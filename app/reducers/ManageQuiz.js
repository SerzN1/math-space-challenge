import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const initialState = {
  activeQuestion: 0,
  completedQuiz: {}
};

export default handleActions({
  [types.CHECK_QUIZ_ITEM](state, {payload: {quizIndex, completed}}) {
    return {
      ...state,
      completedQuiz: {
        ...state.completedQuiz,
        [quizIndex]: completed
      }
    };
  },
  [types.CHANGE_QUIZ_ITEM](state, {payload}) {
    return {
      ...state,
      activeQuestion: payload
    };
  }
}, initialState);
