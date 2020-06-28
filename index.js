import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';

import { App } from './App.js';

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

