const { createElement } = require('react');
const { Provider, connect } = require('react-redux');
const { createStore, combineReducers } = require('redux');

const nameReducer = (state = 'world') => state;
const store = createStore(combineReducers({ name: nameReducer }));

const AppRaw = ({ name }) => createElement('div', null, `Hello, ${name}!`);

const App = connect(({ name }) => ({ name }))(AppRaw);

const RootApp = () => createElement(Provider, { store }, createElement(App));

module.exports = { RootApp, App, AppRaw };