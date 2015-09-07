'use strict';

var config = require('../config');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')({lazy: true});
var p      = require('../../package.json');

/**
 * Log Usage options and list Tasks and Sub Tasks
 * @return {LOG}
 */
gulp.task('help:app', function(){
  var lineLenght     = 48,
      packageName    = p.name,
      packageNameLen = packageName.length,
      tagLine        = '';

  if( packageNameLen < lineLenght) {
      var prependSpace     = '',
          appendSpace      = '',
          addSpaces        = (lineLenght-packageNameLen)/2;
      while (prependSpace.length < addSpaces) {
          prependSpace  += ' ';
          appendSpace   += ' ';
      }
      tagLine =prependSpace+packageName+appendSpace;
      config.log(tagLine.length, lineLenght);
      if( tagLine.length <= lineLenght) {
          tagLine += ' ';
      }
  }

  config.log(
    ' \n' +
    '            '+$.util.colors.white.bgBlue.bold('                                                 ')+' \n' +
    '            '+$.util.colors.white.bgBlue.bold(tagLine)+' \n' +
    '            '+$.util.colors.white.bgBlue.bold('                                                 ')+' \n' +
    ' \n'
  );
});

gulp.task('help:tasks', $.taskListing);

gulp.task('help', ['help:app', 'help:tasks']);
