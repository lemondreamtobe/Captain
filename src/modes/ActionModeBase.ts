import store from './store';
export default class ActionModeBase {
  dispatch(params) {
    store.dispatch(params);
  }
}
