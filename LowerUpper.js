var str=process.argv.slice(2)[0];

var lstr = str.toLowerCase();

var arrayLstr = lstr.split('');



for (var i = 0; i < arrayLstr.length; i++) {
	
	if (i%2) {
		console.log(arrayLstr[i].toUpperCase());
	}
	else {
		console.log(arrayLstr[i].toLowerCase());
	}
}
