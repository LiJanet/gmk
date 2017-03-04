var gulp = require('gulp');
var mustache = require("gulp-mustache");
var rename = require('gulp-rename');
var path = require('path');

gulp.task('mustache', function(done){
  const config = gulp.config;
  const pageNames = Object.keys(config.pages);
  
  if(!pageNames.length) done();
  
  var completed = 0;
  const dataRoot = path.join(config.src, config.properties.dataRoot);
  const templatesRoot = path.join(config.src, config.properties.templatesRoot);

  for(var i = 0; i < pageNames.length; ++i){
    var pageName = pageNames[i];
    var templateName = config.pages[pageName];
    gulp.src(path.join(templatesRoot, templateName + '.mustache'))
      .pipe(mustache(path.join(dataRoot, pageName + '.json')))
      .pipe(rename(renamer(pageName)))
      .pipe(gulp.dest(config.dist, { overwrite: true }))
      .on('end', tracker);
    }
  
  function tracker(){
    if(++completed >= pageNames.length) done();
  }
  
  function renamer(pageName){
    return function(path){
      path.basename = pageName;
      path.extname = '.html';
    }
  }
})
