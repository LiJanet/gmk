var gulp = require('gulp');
gulp.plugins = require('require-dir')('./gulp');

gulp.plugins['config-tools'].setupConfig(gulp);
gulp.plugins['prepare'].defineTasks(gulp);
gulp.plugins['finish'].defineTasks(gulp);
gulp.plugins['config-tools'].defineTasks(gulp);
gulp.plugins['build'].defineTasks(gulp);
gulp.plugins['watch'].defineTasks(gulp);

gulp.task('rebuild', gulp.series('clean', 'build'));
gulp.task('start', gulp.parallel.apply(gulp, gulp.config.start));
gulp.task('default', gulp.parallel('start'));