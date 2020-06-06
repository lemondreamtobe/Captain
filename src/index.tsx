import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './pages';
import "./styles.less";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
