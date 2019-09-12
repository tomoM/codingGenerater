'use strict';
/* ----------------------------------------------------------
 clean.js
 指定ディレクトリを削除する
 - clean
 ---------------------------------------------------------- */
/* npm package
 ---------------------------------------------------------- */
const gulp = require('gulp');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');
// indiv.
const del = require('del');

/* clean
   出力ファイルをフォルダごと削除する
 ---------------------------------------------------------- */
gulp.task('clean', (done)=> {
  del([config.dir.dist + '**']);
  done();
});
