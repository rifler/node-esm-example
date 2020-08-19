const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const _ = require("lodash");
const {take} = require("redux-saga/effects");
const { RootApp } = require('./App/index.cjs');


const app = express();

app.get('/', (req, res) => {
    const reactAnswer = ReactDOMServer.renderToString(
        React.createElement(RootApp),
    );
    const lodashAnswer = _.map([1, 2, 3], (x) => x * 2);
    const sagaAnswer = take.toString().slice(0, 40);

    const answer = `
        React:
        ${reactAnswer}
        
        lodash:
        ${lodashAnswer}
        
        saga:
        ${sagaAnswer}
    `;

    res.send(answer);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

