"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'); // Run local dev server
var open = require('gulp-open'); // Open URL in a browser
var browserify = require('browserify'); // Bundle JS
var reactify = require('reactify'); // Transforms React JSX into JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files
var lint = require('gulp-eslint');  // Lint JS files (including JSX)

// Configure paths, globs, etc.
var config = {
  port: 4000,
  devBaseUrl: 'http://localhost',
  paths: {
    src: './src',
    dist: './dist',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ]
  }
};
config.paths.html = config.paths.src + '/**/*.html';
config.paths.js  = config.paths.src + '/**/*.js';
config.paths.images = config.paths.src + '/images/*';

// Start a local dev server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

// Open our base dev path in the default browser
gulp.task('open', ['connect'], function() {
  gulp.src(config.paths.dist + '/index.html')
    .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

// Copy html files to dest
gulp.task('htmlCopy', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());  // Reload dev server since html may be different
});

gulp.task('jsMainBundle', function() {
  browserify(config.paths.src + '/main.js')
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());
})

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
    .pipe(lint({
      configFile: 'eslint.config.json'
    }))
    .pipe(lint.format())
});

// Watch files and rerun if any files in paths.html change
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['htmlCopy']);
  gulp.watch(config.paths.js, ['jsMainBundle', 'lint']);
  gulp.watch(config.paths.css, ['css'],
  gulp.watch(config.paths.images, ['images']));

});

// Default task if no tasks are specified
gulp.task('default', ['htmlCopy', 'jsMainBundle', 'css', 'images', 'lint', 'watch', 'open']);
