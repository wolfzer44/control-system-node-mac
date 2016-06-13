'use strict';

const exec = require('child_process').exec;

exec('osascript -e "set Volume 10"', function(error, stdout, stderr) {
  console.log(error);
});
