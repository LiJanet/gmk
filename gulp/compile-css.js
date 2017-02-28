var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('compile:css:sass', function(done){
  gulp.src('./**/*.scss', {cwd: gulp.config.tmp, base: './' + gulp.config.tmp })
    .pipe(sass())
    .pipe(gulp.dest(gulp.config.tmp))
    .on('end', done);
});

gulp.task('compile:css:clean', function (done){
  del('./**/*.scss', {cwd: gulp.config.tmp })
    .then(function(){ done(); });
});

gulp.task('compile:css', gulp.series('compile:css:sass', 'compile:css:clean'));