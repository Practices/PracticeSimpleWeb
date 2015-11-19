'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jade = require('gulp-jade'),
    filter = require('gulp-filter'),
    rimraf = require('gulp-rimraf'),
    bowerFiles = require('main-bower-files');

var path = {
  dist: {
    base:'dist',
    php: 'dist/app',
    js:  'dist/js',
    css: 'dist/css',
    html:'dist/html',
    img: 'dist/img',
    lib: 'dist/lib'
  },
  src: {
    base: 'src',
    all:  'src/**/*.*',
    php:  'src/app/**/*.php',
    jade: 'src/public/html/**/*.jade',
    js:   'src/public/js/**/*.js',
    css:  'src/public/css/**/*.css',
    img:  'src/public/img/*.png',
    index:'src/public/index.jade'
  },
  tmp: {
    jade: './.tmp/jade'
  },
  clean:  'dist',
  bower:  'bower_components',
  npm:    'node_modules'
};

gulp.task('jade-tmp',function () {
  return gulp.src([path.src.index, path.src.jade])
  .pipe(jade({pretty:true}))
  .pipe(gulp.dest(path.tmp.jade));
});

gulp.task('jade',function () {
  return gulp.src(path.src.jade)
  .pipe(jade({pretty:false}))
  .pipe(gulp.dest(path.dist.html));
});

gulp.task('php',function () {
  return gulp.src(path.src.php)
  .pipe(gulp.dest(path.dist.php));
});

gulp.task('js',function () {
  return gulp.src(path.src.js)
  .pipe(gulp.dest(path.dist.js));
});

gulp.task('css',function () {
  return gulp.src(path.src.css)
  .pipe(gulp.dest(path.dist.css));
});

gulp.task('jade-index',function () {
  return gulp.src(path.src.index)
  .pipe(jade({pretty:true}))
  .pipe(gulp.dest(path.dist.base));
});

gulp.task('img', function () {
  return gulp.src(path.src.img)
  .pipe(gulp.dest(path.dist.img));
});

gulp.task('bower-js',function () {
  return gulp.src(bowerFiles('**/*.js'))
  .pipe(gulp.dest(path.dist.lib));
});

gulp.task('watch',function () {
  gulp.watch(path.src.js, ['js']);
  gulp.watch(path.src.css, ['css']);
  gulp.watch(path.src.php, ['php']);
  gulp.watch(path.src.jade, ['jade']);
  gulp.watch(path.src.index, ['jade-index']);
})

gulp.task('build',['jade-index', 'jade', 'js', 'css', 'php', 'img'])
