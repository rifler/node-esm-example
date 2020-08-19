import React from 'react';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import styled from 'styled-components';

const { createElement } = React;

const nameReducer = (state = 'world') => state;
const store = createStore(combineReducers({ name: nameReducer }));

const Text = styled.span`
  color: red;
`;

const AppRaw = ({ name }) => createElement(
    Text,
    null,
    `Hello, ${name}!`
);

const App = connect(({ name }) => ({ name }))(AppRaw);

const RootApp = () => createElement(Provider, { store }, createElement(App));

export { RootApp, App, AppRaw };