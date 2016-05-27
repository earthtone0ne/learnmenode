
var fs = require('fs');
var path = process.argv[2].toString();

var text= fs.readFile(path, "utf8", function(error, data) {
	var result = data.match(/\n/g).length;
	console.log(result);}
);