var gulp = require("gulp");
var babel = require("gulp-babel");
var connect     = require('gulp-connect');
var runSequence = require('run-sequence')

gulp.task("default", function () {
  return gulp.src("src/**")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});