var gulp = require('gulp');
var verb = require('./');

gulp.task('default', function () {
  gulp.src('.verbrc.md')
    .pipe(verb({dest: 'README.md'}))
    .pipe(gulp.dest('./'));
});