import { fromJS } from 'immutable';
import {actionTypes} from './types';

export const initialState = fromJS({
  list: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DEMO:
      return state.set('list', action.payload);
    default:
      return state;
  }
};