
function countLines(){

const readline = require('readline');
const fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream("./"+process.argv[2],"utf8")
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});

}

module.exports = countLines;