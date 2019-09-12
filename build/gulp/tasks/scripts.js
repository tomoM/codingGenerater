'use strict';
/* ----------------------------------------------------------
 scripts.js
 JavaScriptファイルをwebpack経由で生成する
 - scripts
 ---------------------------------------------------------- */
/* npm package
 ---------------------------------------------------------- */
const gulp = require('gulp');
const $plugins = require('gulp-load-plugins')();
const config = require('../config');
// indiv.

/* js:jquery npm install した jQuery をコピー
 ---------------------------------------------------------- */
gulp.task('js:jquery', (done) => {
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest([config.dir.srcScripts] + 'lib/'));
  done();
});

/* js:lib ライブラリの圧縮と連結をする
 ---------------------------------------------------------- */
