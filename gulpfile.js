var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
const babel = require('gulp-babel');
var fs = require('fs');

gulp.task('clean', function() {
  return gulp.src('dist/*')
    .pipe(clean());
});

var options = {
  collapseWhitespace: true,
  minifyJS: true,
  minifyCSS: true
};

gulp.task('minify', function() {
  return gulp.src(['src/**/*.html', 'src/**/*.css'])
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'));
});

gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env', ['minify', { builtIns: false }]]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('clean', 'minify', 'babel'), function () {});
