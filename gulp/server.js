var gulp = require('gulp');
var HttpServer = require('http-server').HttpServer;

gulp.task('server', function(){
  var server = new HttpServer({
    cache: gulp.config.properties.serverCache,
    root: gulp.config.dist
  });
  server.listen(gulp.config.properties.serverPort);
});
