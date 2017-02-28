function prepare(gulp, path, done){
  gulp.src(path, { cwd: gulp.config.src, base: './' + gulp.config.src })
    .pipe(gulp.dest(gulp.config.tmp, { overwrite: true }))
    .on('end', done);
}

function defineTasks(gulp){
  for ( var key in gulp.config.paths)
    gulp.task("prepare:" + key, preparer(key));

  function preparer(key){
    return function(done){
      prepare(gulp, gulp.config.paths[key], done);
    }
  }
}

module.exports = {
  prepare: prepare,
  defineTasks: defineTasks
}