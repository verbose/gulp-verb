var path = require('path');
var Stream = require("stream");
var gutil = require("gulp-util");
var verb = require('verb');
var _ = require('lodash');

var pkg = require(path.join(__dirname, 'package.json'));
verb.runner = {
  name: pkg.name,
  url: pkg.homepage
};

var stream = new Stream.Transform({objectMode: true});

module.exports = function (options) {
  "use strict";

  options = _.extend({data: ['docs/*.{json,yml}']}, options);

  // Check for required options
  if (!options) {
    throw new gutil.PluginError("gulp-verb", "No options supplied");
  }

  verb.options = _.extend(verb.options || {}, options);

  stream._transform = function(file, enc, callback) {
    // Do nothing if no contents
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {
      this.emit("error", new gutil.PluginError("gulp-verb", "Stream content is not supported"));
      return callback();
    }

    // check if file.contents is a `Buffer`
    if (file.isBuffer()) {
      var page = verb.process(String(file.contents), verb.options);

      // Extend the context
      var context = _.extend({}, verb.options, options, {
        data: options.data
      }, page.context);

      file.contents = new Buffer(page.content);

      if (context.dest) {
        file.path = path.join(file.base, context.dest);
      }
      this.push(file);
    }
    return callback(null);
  }

  return stream;
};
