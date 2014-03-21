# gulp-verb

> verb plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-verb` as a development dependency:

```shell
npm install --save-dev gulp-verb
```

Then, add it to your `gulpfile.js`:

```javascript
var verb = require("gulp-verb");

gulp.src("./docs/README.tmpl.md")
  .pipe(verb({}))
  .pipe(gulp.dest("./README.md"));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-verb
[npm-image]: https://badge.fury.io/js/gulp-verb.png

[travis-url]: http://travis-ci.org/assemble/gulp-verb
[travis-image]: https://secure.travis-ci.org/assemble/gulp-verb.png?branch=master

[coveralls-url]: https://coveralls.io/r/assemble/gulp-verb
[coveralls-image]: https://coveralls.io/repos/assemble/gulp-verb/badge.png

[depstat-url]: https://david-dm.org/assemble/gulp-verb
[depstat-image]: https://david-dm.org/assemble/gulp-verb.png
