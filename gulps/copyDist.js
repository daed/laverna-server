'use strict';

module.exports = function(gulp) {
    return function() {
        return gulp.src([
            './dist/**',
	    './app/**',
        ], {base: './'})
        .pipe(gulp.dest('./release/laverna/'));
    };
};

