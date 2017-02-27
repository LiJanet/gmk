var gulp = require('gulp');
var HttpServer = require('http-server').HttpServer;

gulp.task('server', function(){
  var server = new HttpServer({
    cache: -1,
    root: './dist/'
  });
  server.listen(8080);
});
