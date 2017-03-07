var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCss = require('gulp-clean-css');
var del = require('del');

gulp.task('bundle:css', function(done){
  var sources = gulp.config.paths.css.concat('!**/bundle.css');
  gulp.src(sources, { cwd: gulp.config.tmp })
    .pipe(concatCss("css/bundle.css"))
    .pipe(gulp.dest(gulp.config.tmp, {overwrite: true}))
    .on('end', function(){
      del.sync(sources, { cwd: gulp.config.tmp, base: './' + gulp.config.tmp });
      done();
    })
})

gulp.task('minify:css', function(done){
  gulp.src(gulp.config.paths.css, { cwd: gulp.config.tmp, base: './' + gulp.config.tmp })
    .pipe(cleanCss())
    .pipe(gulp.dest(gulp.config.tmp, {overwrite: true}))
    .on('end', done);
});
