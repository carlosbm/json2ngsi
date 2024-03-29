#!/usr/bin/env node
module.exports = json2ngsi
var argv = require('optimist').argv;
var fs   = require('fs');
var ngsi = require('ngsi-parser');

var index = 0;

function json2ngsi () {
    var files = argv._;
    var readOption = { encoding: 'utf8' };

    var readFunc;
    readFunc = function (err, data) {
        console.log(JSON.stringify(ngsi.parseEntity(JSON.parse(data))));
    };

    fs.readFile(files[0], readOption, readFunc);
}

json2ngsi();
