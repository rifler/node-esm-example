const patchesPackageJson = [
    {
        to: 'redux-saga',
        content: {
            type: 'module',
            exports: {
                '.': './dist/redux-saga-core-npm-proxy.esm.js',
                './effects': './dist/redux-saga-effects-npm-proxy.esm.js',
            },
        }
    },
    {
        to: '@redux-saga/core',
        content: {
            type: 'module',
            exports: {
                '.': './dist/redux-saga-core.esm.js',
                './effects': './dist/redux-saga-effects.esm.js',
            },
        },
    },
    {
        to: '@redux-saga/deferred',
        content: {
            type: 'module',
            exports: {
                '.': './dist/redux-saga-deferred.esm.js'
            },
        },
    },
    {
        to: '@redux-saga/delay-p',
        content: {
            type: 'module',
            exports: {
                '.': './dist/redux-saga-delay-p.esm.js'
            },
        }
    },
    {
        to: '@redux-saga/is',
        content: {
            type: 'module',
            exports: {
                '.': './dist/redux-saga-is.esm.js',
            },
        },
    },
    {
        to: '@redux-saga/symbols',
        content: {
            type: 'module',
            exports: {
                '.': './dist/redux-saga-symbols.esm.js',
            },
        },
    },
    {
        to: 'redux',
        content: {
            type: 'module',
            exports: {
                '.': './es/redux.js',
            },
        },
    },
    {
        to: 'react-redux',
        content: {
            type: 'module',
            exports: {
                '.': './es/index.js',
            },
        },
    },
    {
        to: 'styled-components',
        content: {
            type: 'module',
            exports: {
                '.': './dist/styled-components.esm.js',
            },
        },
    },
    {
        to: '@emotion/is-prop-valid',
        content: {
            type: 'module',
            exports: {
                '.': './dist/is-prop-valid.esm.js'
            },
        }
    },
    {
        to: '@emotion/memoize',
        content: {
            type: 'module',
            exports: {
                '.': './dist/memoize.esm.js'
            },
        }
    },
    {
        to: '@emotion/stylis',
        content: {
            type: 'module',
            exports: {
                '.': './dist/stylis.esm.js'
            },
        }
    },
    {
        to: '@emotion/unitless',
        content: {
            type: 'module',
            exports: {
                '.': './dist/unitless.esm.js'
            },
        }
    }
];

// dist/unitless.esm.js
export { patchesPackageJson };