var gulp = require('gulp');
var mustache = require('gulp-mustache');
var through = require('through2');
var vinylFile = require('vinyl-file');
var path = require('path');

gulp.task('mustache', function(done){
  const config = gulp.config;
  const templatesRoot = path.join(config.src, config.properties.templatesRoot);
  
  gulp.src(config.paths.data, { cwd: config.src })
    .pipe(through.obj(function(file, encoding, callback) {
      if(file.isNull()){
        this.push(file);
        return callback();
      }
      if(file.isStream()) return callback('Streams are not supported', file);
      if(file.isBuffer()){
        var data = JSON.parse(file.contents.toString(encoding));
        var template = vinylFile.readSync(path.join(templatesRoot, data.template + '.mustache'));
        template.data = data;
        data._name = file.relative;
        this.push(template);
        return callback();
      }
    }))
    .pipe(mustache())
    .on('data', function(file){
      file.path = file.data._name;
      file.extname = '.html';
    })
    .pipe(gulp.dest(config.dist, { overwrite: true }))
    .on('end', done);
});
