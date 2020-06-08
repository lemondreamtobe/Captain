import { combineReducers } from 'redux-immutable';
import demoInfo from './Demo/reducer';
import demo2Info from './Demo2/reducer';

export default function createReducer() {
  return combineReducers({
    demoInfo,
    demo2Info
  });
}