'use strict';
/* ----------------------------------------------------------
 watch.js
 ファイル監視タスクなどデフォルト起動
 - default
 ---------------------------------------------------------- */
/* npm package
 ---------------------------------------------------------- */

/* npm package
 ---------------------------------------------------------- */
const gulp = require('gulp');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');

/* watch
 -----------------------------------------------------------*/
gulp.task('watch', (done) => {
  gulp.watch([config.dir.srcHtml + '**/[^_]*.ejs']).on('change', gulp.series('ejs', 'reload'));
  gulp.watch([config.dir.srcStyle + '**/*.scss']).on('change', gulp.series('sass', 'reload'));
  done();
});
/* default
 -----------------------------------------------------------*/
gulp.task('default', gulp.parallel('watch', 'serve'));
