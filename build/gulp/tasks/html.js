'use strict';
/* ----------------------------------------------------------
html.js
  ejsをコンパイルする
  - ejs
---------------------------------------------------------- */
/* npm package
---------------------------------------------------------- */
const gulp = require('gulp');
const fs = require('fs');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');
// indiv.
const ejs = require("gulp-ejs");
const rename = require('gulp-rename');

/* ejs to html
 ---------------------------------------------------------- */
gulp.task('ejs', (done) => {
  gulp.src([config.dir.srcHtml + '**/[^_]*.ejs'])
    .pipe(ejs())
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.dir.dist));
  done();
});
