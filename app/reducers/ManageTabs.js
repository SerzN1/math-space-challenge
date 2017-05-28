import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const initialState = {
  activeTab: 0
};

export default handleActions({
  [types.CHANGE_TAB](state, {payload}) {
    return {
      ...state,
      activeTab: payload
    };
  }
}, initialState);
