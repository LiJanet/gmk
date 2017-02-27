var gulp = require('gulp');

function readConfig(rawConfig){
  var activeProfiles = [];
  for (var i = 0; i < rawConfig.activeProfiles.length; ++i)
    activeProfiles.push(rawConfig.profiles[rawConfig.activeProfiles[i]]);
  return {
    properties: rawConfig.properties,
    config: mergeValues(activeProfiles)
  }
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

module.exports = readConfig;
