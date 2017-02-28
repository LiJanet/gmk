function setupConfig(gulp){
  gulp.config = readConfig(gulp.plugins['config']);
}

function readConfig(rawConfig){
  var activeProfiles = [];
  for (var i = 0; i < rawConfig.activeProfiles.length; ++i)
    activeProfiles.push(rawConfig.profiles[rawConfig.activeProfiles[i]]);
  return mergeValues(activeProfiles);
}

function mergeValues(values){
  if(values.length !== 0){
    var first = values[0];
    if(typeof (first) === 'object'){
      if(first instanceof Array)
        return mergeArrays(values);
      else
        return mergeObjects(values);
    }else
      return values[values.length - 1];
  }
}

function mergeObjects(objects){
  var result = {};

  for (var i = 0; i < objects.length; ++i){
    for ( var key in objects[i]){
      var values = [];
      if(!(key in result)){
        for (var j = i; j < objects.length; ++j)
          if(key in objects[j])
            values.push(objects[j][key]);
        result[key] = mergeValues(values);
      }
    }
  }

  return result;
}

function mergeArrays(arrays){
  return [].concat.apply([], arrays);
}

function defineTasks(gulp){
  var config = gulp.config;
  var tasks = config.tasks;
  var names = Object.keys(tasks);
  var definedTasks = gulp.tree({
    deep: false
  }).nodes;

  while(names.length > 0){
    var changed = false;
    for (var i = names.length - 1; i >= 0; --i){
      var name = names[i];
      if(~definedTasks.indexOf(name))
        throw 'duplicate task: ' + name;
      var children = tasks[name];
      if(areAllDefined(children)){
        if(!children.length)
          gulp.task(name, noOp);
        else
          gulp.task(name, gulp.series.apply(gulp, children));
        definedTasks.push(name);
        names.splice(i, 1);
        changed = true;
      }
    }
    if(!changed)
      throw 'cyclic or unfulfilled task dependency detected for tasks ' + JSON.stringify(names);
  }

  function noOp(done){
    done();
  }
  function areAllDefined(children){
    for (var i = 0; i < children.length; ++i)
      if(!~definedTasks.indexOf(children[i]))
        return false;
    return true;
  }
}

module.exports = {
  readConfig: readConfig,
  setupConfig: setupConfig,
  defineTasks: defineTasks
}
