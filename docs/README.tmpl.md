# {%= name %} {%= badge('fury') %}

> [gulp](https://github.com/wearefractal/gulp) plugin for [Verb](https://github.com/assemble/verb)

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