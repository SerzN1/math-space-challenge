import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import page from './ManagePage';
import tabs from './ManageTabs';
import quiz from './ManageQuiz';

const rootReducer = combineReducers({
  routing,
  page,
  tabs,
  quiz,
});

export default rootReducer;
