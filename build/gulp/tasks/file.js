'use strict';
/* ----------------------------------------------------------
 file.js
 画像ファイルなどファイル系の操作を行うタスク
 - file:copy
 ---------------------------------------------------------- */
/* npm package
 ---------------------------------------------------------- */
const gulp = require('gulp');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');

/* file:copy ファイルをdistにコピーする
 ---------------------------------------------------------- */
gulp.task('file:copy', (done) => {
  gulp.src([config.dir.srcFile])
    .pipe(gulp.dest([config.dir.distAssets]));
  done();
});
