var os = require('os');
var colors = require('colors');
var timeInfo = require('./timeSet');  //przypisanie nowego modułu

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.blue, type.italic);
    console.log('Release:.'.cyan, release);
    console.log('CPU model:'.yellow, cpu);    
    console.log('Uptime: ~'.red, timeInfo.timePrint(uptime).green.bold);       // odwołanie do funkcji w zewnętrznym  module    
    console.log('User name:'.magenta, userInfo.username.bold);
    console.log('Home dir:'.magenta, userInfo.homedir);
}

exports.print = getOSinfo;

