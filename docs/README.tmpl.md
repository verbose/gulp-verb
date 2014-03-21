
# {%= name %}
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> verb plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `{%= name %}` as a development dependency:

```shell
npm install --save-dev {%= name %}
```

Then, add it to your `gulpfile.js`:

```javascript
var verb = require("{%= name %}");

gulp.src("./docs/README.tmpl.md")
  .pipe(verb({}))
  .pipe(gulp.dest("./README.md"));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/{%= name %}
[npm-image]: https://badge.fury.io/js/{%= name %}.png

[travis-url]: http://travis-ci.org/assemble/{%= name %}
[travis-image]: https://secure.travis-ci.org/assemble/{%= name %}.png?branch=master

[coveralls-url]: https://coveralls.io/r/assemble/{%= name %}
[coveralls-image]: https://coveralls.io/repos/assemble/{%= name %}/badge.png

[depstat-url]: https://david-dm.org/assemble/{%= name %}
[depstat-image]: https://david-dm.org/assemble/{%= name %}.png
