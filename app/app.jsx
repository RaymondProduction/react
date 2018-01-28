import ReactDOM from'react-dom';
import React from 'react';

import MessageForm from './components/MessageForm.jsx';
import AppView from './components/AppView.jsx';

// using ES6 modules
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'

var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");

var store = redux.createStore(reducer);

store.dispatch({
  type: "SET_STATE",
  state: {
    messages: [ {title: "1", text: "iPhone 7 Plus"}, {title: "2", text: "Samsung Galaxy A5"} ]
  }
});


ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById("app")
);
