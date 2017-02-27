var gulp = require('gulp');
gulp.plugins = require('require-dir')('./gulp');

gulp.plugins['config-tools'].setupConfig(gulp);

gulp.task('rebuild', gulp.series('clean', 'build'));
gulp.task('default', gulp.parallel('rebuild', 'watch'));