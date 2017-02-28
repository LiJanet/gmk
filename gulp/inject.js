var gulp = require('gulp');
var sort = require('sort-stream');
var inject = require('gulp-inject');

gulp.task('inject', function(done){
  gulp.src(gulp.config.paths.html, { cwd: gulp.config.dist })
    .pipe(inject(
      gulp.src(gulp.config.paths.js, { cwd: __dirname + '/../' + gulp.config.dist, read: false })
        .pipe(sort(function(a, b){
          return 0; //TODO
        }))
      ), { relative: false })
    .pipe(inject(gulp.src(gulp.config.paths.css, { cwd: __dirname + '/../' + gulp.config.dist, read: false }), { relative: false }))
    .pipe(gulp.dest(gulp.config.dist))
    .on('end', done);
})