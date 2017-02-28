var watchers = {};

function defineTasks(gulp){
  var watchTasks = [];
  for ( var key in gulp.config.paths){
    var taskName = 'watch:' + key;
    gulp.task(taskName, watchSource(gulp, key));
    watchTasks.push(taskName);
  }
  gulp.task('watch', gulp.parallel.apply(gulp, watchTasks));
}

function watchSource(gulp, key){
  return function(done){
    watchers[key] = gulp.watch(gulp.config.paths[key], {
      queue: false,
      cwd: gulp.config.src
    }, gulp.series('build:' + key, 'inject'));
    done();
  }
}

module.exports = {
  watchSource: watchSource,
  defineTasks: defineTasks,
  watchers: watchers
}