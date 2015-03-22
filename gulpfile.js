'use strict';

var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),

    js = function() {
        var bundler = browserify({
                entries: [ './js/init.js' ],
                transform: [ reactify ],
                debug: true
            }),
            watcher = watchify( bundler ),
            build = function() {
                var start = Date.now();

                console.log( 'Start js' );

                watcher
                    // TODO: stop copy/pasting code here and below
                    .bundle()
                    .pipe( source('app.js') )
                    // this is where we add uglifying, etc.
                    .pipe( gulp.dest('./static/') );

                console.log( 'Finished js: ', (Date.now()-start)+'ms' );
            };

        build();
        watcher.on( 'update', build );

        return watcher;
    };

gulp.task( 'js', js );
gulp.task( 'default', [ 'js' ] );
