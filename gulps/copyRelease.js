'use strict';

module.exports = function(gulp) {
    return function() {
        return gulp.src([
            './config/**',
            './preload.js',
            './server.js',
            './electron.js',
            './package.json',
            './env.example',
            'http.js',
        ], {base: './'})
        .pipe(gulp.dest('./release/laverna'));
    };
};
