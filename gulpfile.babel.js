'use strict';
/* ----------------------------------------------------------
 npm package
 ---------------------------------------------------------- */
const gulp = require('gulp'); //gulp
const $plugins = require('gulp-load-plugins')(); //gulp-XXX系プラグインの一括読み込み
const requireDir = require('require-dir'); //指定ディレクトリをrequireする

//タスクファイルの読み込み
requireDir('./build/gulp/tasks', {recurse: true});
