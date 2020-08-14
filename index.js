import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from './App';

const app = express();

app.get('/', (req, res) => {
    res.send(
        ReactDOMServer.renderToString(
            React.createElement(App, { name: 'world' }, null),
        ),
    );
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

