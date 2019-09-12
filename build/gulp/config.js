/* ----------------------------------------------------------
 config.js
 gulpの設定用ファイル
 gulp version 4.0
  - dir
  - module.exports
 ---------------------------------------------------------- */
/* dir
 * パスの定義
 ---------------------------------------------------------- */
const dir = {
  src: 'src/',
  srcStyle: 'src/style/',
  srcHtml: 'src/html/',
  srcScripts: 'src/scripts/',
  srcFile: 'src/file/**/*.+(gif|svg|jpg|png|json|csv|pdf|ics|zip|eot|ttf|otf|woff|woff2|mp4|webm)',
  dist: 'dist/',
  distAssets: 'dist/assets/',
  distAssetsCss: 'dist/assets/css/',
  distAssetsJs: 'dist/assets/js/',
};

/* config設定の定義
 ---------------------------------------------------------- */
module.exports = {
  dir: dir
};
