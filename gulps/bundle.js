'use strict';

const webpackStream = require('webpack-stream');
const webpack       = require('webpack');

/**
 * @file Bundle JS files.
 * @example gulp bundle // Bundle JS files
 * @example gulp bundle --prod // Bundle JS for production (minify, uglify)
 * @returns {Function}
 */
module.exports = (gulp, $) => {

    // Use a different config file for production
    let webpackConfig = ($.util.env.prod ? 'production.config' : 'config.js');
    webpackConfig     = require(`../webpack.${webpackConfig}`);

    return cb => {
        const isBuild = true;
        //const isBuild = process.argv[2] === 'build';
        let called    = false;

        
        webpackConfig.watch = false;
        

        return gulp.src('./scripts.js')
        .pipe(webpackStream(webpackConfig, webpack, () => {

            if (!called && !isBuild) {
                called = true;
                cb();
            }
        }))
        .pipe(gulp.dest(`${$.distDir}/scripts/`))
    };
};
