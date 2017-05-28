import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const initialState = {
  pageId: 'geometry'
};

export default handleActions({
  [types.CHANGE_PAGE](state, {payload}) {
    return {
      ...state,
      pageId: payload
    };
  }
}, initialState);
