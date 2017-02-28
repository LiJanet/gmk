function finish(gulp, path, done){
  gulp.src(path, { cwd: gulp.config.tmp, base: './' + gulp.config.tmp })
  .pipe(gulp.dest(gulp.config.dist, { overwrite: true }))
  .on('end', done);
}

function defineTasks(gulp){
  for ( var key in gulp.config.paths)
    gulp.task("finish:" + key, finisher(key));
  
  function finisher(key){
    return function(done){
      finish(gulp, gulp.config.paths[key], done);
    }
  }
}

module.exports = {
  finish: finish,
  defineTasks: defineTasks
}