var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(done){
  del([gulp.config.tmp, gulp.config.dist])
    .then(function(){ done(); });
});