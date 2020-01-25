
const readline = require('readline');
	const fs = require('fs');


	
	var myInterface = readline.createInterface({
	  input: fs.createReadStream("./"+process.argv[2],"utf8")
	});


	var lineno = 0;
	myInterface.on('line', function (line) {
	  lineno++;
	
	  console.log(typeof('Line number ' + lineno + ': ' + line));
	  var tab = line.split('');
	  console.log(tab);

	});

 



/*const c1 = fs.readFileSync("./"+process.argv[2],"utf8");

const c2 = fs.readFileSync("./"+process.argv[3],"utf8");


function row(tab,n){

	//combien de lignes par colonne.
	var row = 0;//init row
	row = (tab.length-3)/n ;

return "nombre de lignes par colonne : " +row;

}

function cell(tab,n){
	var cell = 0;
	cell = (tab.length-3)/n;
	return "nombre de cellules par ligne : " +cell;
}

//quand 
*/
//console.log(countLines());



