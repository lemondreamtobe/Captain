import * as React from 'react';
import * as ReactDOM from "react-dom";
import App from './pages';
import "./styles.less";
import './global/style/reset.less';

if (process.env.NODE_ENV === 'development') {
  require('./mock/index');
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
