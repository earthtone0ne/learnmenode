var fs = require('fs');
var path = process.argv[2].toString();

var text= fs.readFileSync(path, "utf8");
var result = text.match(/\n/g).length;
console.log(result);