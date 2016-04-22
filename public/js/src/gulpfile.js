var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

function compile(watch) {


  var bundler = watchify(browserify('app.js', { debug: false }).transform(babel.configure({
      presets: ["es2015", "react"]
  })));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('compiled.js'))
      .pipe(buffer())
      .pipe(gulp.dest('../'));

  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', function() { return compile(); });
// gulp.task('watch', function() { return watch(); });

gulp.task('compile', function() {
  return compile();
});

// set up watchers
gulp.task('watch', function() {
    gulp.watch(['**/*.js', '**/*.jsx','!node_modules/**/*', 'package.json'], ['compile'])
});

gulp.task('default', ['watch']);
