var gulp = require('gulp');

gulp.task('build', function(done){
  console.log('building...');
  console.log(gulp.plugins.config);
  done();
});
