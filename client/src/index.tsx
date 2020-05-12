import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';

import App from "./layouts/App/App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import history from './history';
// import { createBrowserHistory } from "history";

import "./index.module.scss";

// const history = createBrowserHistory();
// // history={history}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
