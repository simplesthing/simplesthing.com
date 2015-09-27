'use strict';
// Dependencies
var log          = require('./util/log');
var errorHandler = require('./util/errorHandler');
var gitReporter  = require('./util/gitReporter');

// default config
var defaultConfig = {
    root         : './',
    src          : 'src',
    build        : 'build',
    dist         : 'dist',
    index        : 'src/index.html',
    app          : 'src/app',
    tests        : [
     'src/app/**/*.spec.js'
    ],
    appjs        : [
      'src/**/*.js',
      '!src/app/**/*.spec.js',
      '!src/app/**/*.mock.js',
      '!src/app/images/**/*.js'
    ],
    gulpjs       : ['gulpfile.js', './gulp/**/*.js'],
    sass         : ['src/styles/styles.scss'],
    images       : ['src/images/**/*.*', '!src/images/sprites/*.*'],
    assets       : [
      'src/app/libs/basic-color-picker/basic-color-picker.html',
      'src/**/*.*',
      '!src/images/sprites/*.*',
      '!src/app/**/*.html',
      '!src/index.html',
      '!src/**/*.scss',
      '!src/**/*.js',

    ],
    fonts        : ['./bower_components/fontawesome/fonts/**/*.*', './bower_components/bootstrap-sass-official/assets/fonts/**/*.*'],
    sprites      : 'src/images/sprites/**/*.{png,jpg,gif}',
    log          : log,
    errorHandler : errorHandler,
    gitReporter  : gitReporter,
    inject       : {
      ignorePath   : [ 'src', '../dist/' ],
      addRootSlash : false,
      relative     : true
    },
    wiredep      : {
      bowerJson    : require('../bower.json'),
      directory    : './bower_components/',
      ignorePath   : '../..',
      exclude      : [ /bootstrap\.css/]
    },
    jshint        : '.jshintrc',
    htmlhint      : '.htmlhintrc',
    htmlTemplates  : ['src/app/**/*.html', '!src/index.html', '!src/app/libs/**/*.html'],
    templateCache : {
      module  : 'simplesthing',
      root    : 'app'
    },
    deploy     : {
      displayName: 'Admin Dashboard',
      war: 'admindash-ui.war'
    }

};

module.exports = defaultConfig;
