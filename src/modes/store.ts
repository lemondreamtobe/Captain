import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {fromJS} from 'immutable';
import createReducer from './reducers';

const store = configureStore();

export default store;

function configureStore(initialState = {}) {
  const middlewares = [ReduxThunk];
  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  // @ts-ignore
  const composeEnhancers =
    // @ts-ignore
    (process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({shouldHotReload: false})
      : compose;

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
}