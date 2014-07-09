Add verb to your `gulpfile.js`:

```javascript
var verb = require("gulp-verb");

gulp.task('verb', function () {
  gulp.src(['.verbrc.md'])
    // dest filename is defined in options,
    // otherwise gulp will overwrite .verbrc.md
    .pipe(verb({dest: 'README.md'}))
    .pipe(gulp.dest('./'));
});
```