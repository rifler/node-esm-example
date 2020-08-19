const patchesPackageJson = [
    {
        to: 'redux-saga',
        content: {
            'type': 'module',
            'exports': {
                '.': './dist/redux-saga-core-npm-proxy.esm.js',
                './effects': './dist/redux-saga-effects-npm-proxy.esm.js',
            },
        }
    },
    {
        to: '@redux-saga/core',
        content: {
            'type': 'module',
            'exports': {
                '.': './dist/redux-saga-core.esm.js',
                './effects': './dist/redux-saga-effects.esm.js',
            },
        },
    },
    {
        to: '@redux-saga/deferred',
        content: {
            'type': 'module',
            'exports': {
                '.': './dist/redux-saga-deferred.esm.js'
            },
        },
    },
    {
        to: '@redux-saga/delay-p',
        content: {
            'type': 'module',
            'exports': {
                '.': './dist/redux-saga-delay-p.esm.js'
            },
        }
    },
    {
        to: '@redux-saga/is',
        content: {
            'type': 'module',
            'exports': {
                '.': './dist/redux-saga-is.esm.js',
            },
        },
    },
    {
        to: '@redux-saga/symbols',
        content: {
            'type': 'module',
            'exports': {
                '.': './dist/redux-saga-symbols.esm.js',
            },
        },
    },
];

export { patchesPackageJson };