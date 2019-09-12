'use strict';
/* ----------------------------------------------------------
 serve.js
 ローカルサーバーを立ち上げる
 - browserSync
 ---------------------------------------------------------- */

/* npm package
 ---------------------------------------------------------- */
const gulp = require('gulp');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');
// indiv.
const $browserSync = require('browser-sync').create();

/* browser sync
 -----------------------------------------------------------*/
gulp.task('serve', (done) => {
  $browserSync.init({
    server: {
      baseDir: config.dir.dist, //root
      index: 'index.html'
    },
    open: true,
    port: 8080,
    browser: 'default',
    notify: true,
    reloadOnRestart: true
  });
  done();
});

/*reload
 ---------------------------------------------------------- */
gulp.task('reload', (done) => {
  $browserSync.reload();
  done();
});
