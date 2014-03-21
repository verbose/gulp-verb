(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-verb
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> verb plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-verb` as a development dependency:

```shell
npm install --save-dev gulp-verb
```

Then, add it to your `gulpfile.js`:

```javascript
var verb = require("gulp-verb");

gulp.src("./src/*.ext")
	.pipe(verb({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### verb(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


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
