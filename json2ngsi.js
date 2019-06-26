module.exports = json2ngsi
var argv = require('optimist').argv;
var fs   = require('fs');
var ngsi = require('ngsi-parser');

var index = 0;

function main () {
    var files = argv._;
    var readOption = { encoding: 'utf8' };

    var readFunc;
    readFunc = function (err, data) {
        console.log(JSON.stringify(ngsi.parseEntity(JSON.parse(data))));
	

       /* var nextFile = files.shift();
        if (nextFile !== undefined) {
            fs.readFile(nextFile, readOption, readFunc);
        }
*/
    };

    fs.readFile(files[0], readOption, readFunc);
}

main();
