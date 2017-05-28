import { createAction } from 'redux-actions';
import * as types from './types';

// page
export const changePage = createAction(types.CHANGE_PAGE);

// tabs
export const changeTab = createAction(types.CHANGE_TAB);

// quiz
export const checkQuizItem = createAction(types.CHECK_QUIZ_ITEM);
export const changeQuizItem = createAction(types.CHANGE_QUIZ_ITEM);
