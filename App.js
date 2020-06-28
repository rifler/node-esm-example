import React from 'react';
const { createElement } = React;

const App = ({ name }) => createElement('div', null, `Hello, ${name}!`);

export { App };

