'use strict';

const exec = require('child_process').exec;

function volumeChange(req, res) {

  let volume = req.body.volume;
  exec('osascript -e "set Volume ' + volume + '"', function(error, stdout, stderr) {
    if(!error) {
      res.status(200).end();
    } else {
      res.status(400).end();
    }
  });

}

module.exports = volumeChange;
