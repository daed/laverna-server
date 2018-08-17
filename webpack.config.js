'use strict';

/**
 * Webpack configuration file.
 *
 * @file
 */
const path  = require('path'),
    webpack = require('webpack'),
    pkg     = require('./package.json');

module.exports = {
    devtool: 'source-map',

    node: {
        fs: 'empty',
        child_process: 'empty',
        dgram: 'empty',
     },

    entry: {
        main   : path.join(__dirname, '/server.js'),
        vendor : Object.keys(pkg.dependencies),
    },

    output: {
        path       : path.join(__dirname, './dist/scripts/'),
        publicPath : 'scripts/',
        filename   : '[name].js',
    },


    plugins: [

        new webpack.ProvidePlugin({
            _               : 'underscore',
            $               : 'jquery',
            jQuery          : 'jquery',
            'window.jQuery' : 'jquery',
        }),
    ],

    module: {
        rules: [
            // WebWorkers
            {
                test: /worker\.js$/,
                loader: 'worker-loader',
            },

            // Babel
            {
                test    : /\.js?$/,
                exclude : /(node_modules|bower_components)/,
                loader  : 'babel-loader',
            },

            // Templates
            {
                test:  /\.html$/,
                loader: 'raw-loader',
            },
        ],
    },
};
