'use strict';
/* ----------------------------------------------------------
 build.js
 ビルドタスクを動かす
 - build
 ---------------------------------------------------------- */
/* npm package
 ---------------------------------------------------------- */
const gulp = require('gulp');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');

/* tasks require
 ---------------------------------------------------------- */
require('../tasks/clean');
require('../tasks/html');
require('../tasks/style');
require('../tasks/file');

/* 静的コーディング用 build
 ---------------------------------------------------------- */
gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('ejs', 'sass','file:copy')
));
