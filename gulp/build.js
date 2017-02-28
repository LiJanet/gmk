function defineTasks(gulp){
  var buildTasks = [];
  for ( var key in gulp.config.tasks){
    if(key.startsWith('build:'))
      buildTasks.push(key);
  }
  gulp.task('build', gulp.series(gulp.parallel.apply(gulp, buildTasks), 'inject'));
}

module.exports = {
  defineTasks: defineTasks
}