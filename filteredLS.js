var fs = require('fs');
var path = process.argv[2].toString();
var ext = "\." + process.argv[3].toString() + "\$";
ext = new RegExp(ext);
var result =[];
var filter = fs.readdir(path, function (error,array) {
	array.map(function(file) {
			if (file.search(ext)>0) {
			result.push(file);}
		})
		console.log(result.join("\n"));
	})
;

