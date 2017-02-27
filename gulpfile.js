var gulp = require('gulp');
gulp.plugins = require('require-dir')('./gulp');

var readConfig = gulp.plugins['read-config'];
var config = readConfig(gulp.plugins.config);
console.log(JSON.stringify(config, null, 2));

gulp.task('rebuild', gulp.series('clean', 'build'));
gulp.task('default', gulp.parallel('rebuild', 'watch'));

