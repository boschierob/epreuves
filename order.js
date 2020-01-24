const numbers = process.argv.slice(2);

function decroissant(x){

	x.sort(function (a,b) {
	return a - b;
	});

	x.forEach(function(c) {
		return (c)
	});

	return x;
}




console.log(decroissant(numbers));