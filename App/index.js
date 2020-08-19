import React from 'react';
import * as ReactRedux from 'react-redux'
import * as Redux from 'redux'

const { createElement } = React;
const { Provider, connect } = ReactRedux;
const { createStore, combineReducers } = Redux;

const nameReducer = (state = 'world') => state;
const store = createStore(combineReducers({ name: nameReducer }));

const AppRaw = ({ name }) => createElement('div', null, `Hello, ${name}!`);

const App = connect(({ name }) => ({ name }))(AppRaw);

const RootApp = () => createElement(Provider, { store }, createElement(App));

export { RootApp, App, AppRaw };