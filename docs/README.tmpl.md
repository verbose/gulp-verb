# {%= name %} {%= badge('fury') %}

> [gulp](https://github.com/wearefractal/gulp) plugin for [Verb](https://github.com/assemble/verb)

* Get [verb-cli](https://github.com/assemble/verb) to use Verb from the command line
* Get [generator-verb](https://github.com/assemble/generator-verb) to add documentation templates, or initialize docs for new projects
* Get [grunt-verb](https://github.com/assemble/grunt-verb) for your Grunt build-chains.

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

## Author
{%= contrib("brian") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}