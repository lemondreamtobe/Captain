import * as React from 'react';
import * as ReactDOM from "react-dom";
import App from './pages';
import "./styles.less";
import './global/style/reset.less';
import { Provider } from 'react-redux';
import store from './modes/store';

if (process.env.NODE_ENV === 'development') {
  require('./mock/index');
}


const mountNode = document.getElementById("app");
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, mountNode);
