var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify').uglify;
var builtins = require('rollup-plugin-node-builtins');
var dependencies = Object.keys(require('./package.json').dependencies);


var config = {
    input: './index.js',
    output: {
        banner: '#!/usr/bin/env node',
        format: 'cjs',
        file: 'dist/index.min.js',
        interop: false,
    },
    external: dependencies,

    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: false,
        }),
        commonjs(),
        uglify(),
        builtins()
    ]
};

module.exports = config;
