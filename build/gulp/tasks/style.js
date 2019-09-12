'use strict';
/* ----------------------------------------------------------
 style.js
 CSSにコンパイルする
 - scss
 ---------------------------------------------------------- */

/* npm package
 ---------------------------------------------------------- */
const gulp = require('gulp');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');
// indiv.
const sass = require('gulp-sass');
const postCss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const flexbug =  require('postcss-flexbugs-fixes');
sass.compiler = require('node-sass');

/* scss to css
 ---------------------------------------------------------- */
// autoprefixer
const postCssPlugin = [autoprefixer(),flexbug];
gulp.task('sass', (done) => {
  gulp.src([config.dir.srcStyle + '*.scss'])
    .pipe($plugins.plumber({errorHandler: $plugins.notify.onError('<%= error.message %>')}))
    .pipe($plugins.sass({
      outputStyle: 'expanded'
    }))
    .pipe(postCss(postCssPlugin))
    .pipe(gulp.dest(config.dir.distAssetsCss))
  done();
});
