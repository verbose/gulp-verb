var through = require("through2");
var gutil = require("gulp-util");
var verb = require('verb');

module.exports = function (options) {
	"use strict";

	// if necessary check for required options
	if (!options) {
		throw new gutil.PluginError("gulp-verb", "No options supplied");
	}

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function plugin(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-verb", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {

			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
			file.contents = new Buffer(verb.process(String(file.contents), options).content);

			this.push(file);

		}
		return callback();
	}

	return through.obj(plugin);
};
