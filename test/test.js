/*global describe, it*/
"use strict";

var fs = require("fs"),
es = require("event-stream"),
should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
verb = require("../");

describe("gulp-verb", function () {

  var expectedFile = new gutil.File({
    path: "test/expected/README.md",
    cwd: "test/",
    base: "test/expected",
    contents: fs.readFileSync("test/expected/README.md")
  });


  describe("buffer:", function () {
    it("should produce expected file via buffer", function (done) {
      var stream = verb({});

      var srcFile = new gutil.File({
        path: "test/fixtures/README.tmpl.md",
        cwd: "test/",
        base: "test/fixtures",
        contents: fs.readFileSync("test/fixtures/README.tmpl.md")
      });

      stream.on("data", function (newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);
        String(newFile.contents).should.equal(String(expectedFile.contents));
        done();
      });

      stream.write(srcFile);
      stream.end();

    });
  });


  describe("stream:", function () {
    it("should error on stream", function (done) {
      var stream = verb("World");

      var srcFile = new gutil.File({
        path: "test/fixtures/README.tmpl.md",
        cwd: "test/",
        base: "test/fixtures",
        contents: fs.createReadStream("test/fixtures/README.tmpl.md")
      });

      stream.on("error", function(err) {
        should.exist(err);
        done();
      });

      stream.on("data", function (newFile) {
        newFile.contents.pipe(es.wait(function(err, data) {
          done(err);
        }));
      });

      stream.write(srcFile);
      stream.end();
    });
  });
});
