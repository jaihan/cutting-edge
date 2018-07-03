var fs = require('fs');

console.log("Going to get file info!");
fs.stat('input.txt', function(err, stats){
  if (err){
    return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully");

  console.log('isFile ?' + stats.isFile());
  console.log('isDirectory ?' + stats.isDirectory());
  console.log('isBlockDevice ?' + stats.isBlockDevice());
  console.log('isCharacterDevice ?' + stats.isCharacterDevice());
  console.log('isSymbolicLink ?' + stats.isSymbolicLink());
  console.log('isFIFO ?' + stats.isFIFO());
  console.log('isSocket ?' + stats.isSocket());
})
