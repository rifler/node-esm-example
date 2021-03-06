import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';
import { take } from 'redux-saga/effects';
import { RootApp } from './App';

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

