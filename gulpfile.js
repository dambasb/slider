'use strict';

var del = require('del');
var connect = require('gulp-connect');
var csso = require('gulp-csso');
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


// Minify CSS files
gulp.task('styles', function () {
    return gulp.src('./src/sass/styles.scss')
        // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});


// Minify JavaScript files
gulp.task('scripts', function () {
    return gulp.src('./src/js/**/*.js')
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});

// Run webserver with localhost 
gulp.task('connect', function () {
    connect.server({
        proxy: 'localhost',
        port: 9000,
        fallback: 'index.html',
        livereload: true
    });
});

// Watch for changes
gulp.task('watch', function () {
    gulp.watch('./src/sass/styles.scss', ['styles']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

gulp.task('default',
    [
        'connect',
        'styles',
        'scripts',
        'watch'
    ]
);