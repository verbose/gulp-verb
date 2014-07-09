'use strict';

var path = require('path');
var through = require('through2');
var gutil = require('gulp-util');
var matter = require('gray-matter');
var verb = require('verb');
var _ = require('lodash');

var pkg = require(path.join(__dirname, 'package.json'));
verb.runner = {
  name: pkg.name,
  url: pkg.homepage
};

module.exports = function (options) {
  return through.obj(function(file, enc, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }
    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-verb', 'Streaming not supported'));
      return callback();
    }

    try {
      var opts = _.extend({}, {data: ['docs/*.{json,yml}']}, options);
      var obj = matter(file.contents.toString('utf8'));

      // Extend the context
      var ctx = _.extend({}, opts, {data: opts.data}, obj.data);
      var page = verb.process(String(file.contents), ctx);

      file.contents = new Buffer(page.content);

      if (ctx.dest) {
        file.path = path.join(file.base, ctx.dest);
      }
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-verb', err));
    }

    this.push(file);
    callback();
  });
};
