const numbers = process.argv.slice(2);
for (var i = 0; i < numbers.length; i++) {
				numbers[i] = parseInt(numbers[i]);
}

function decroissant(x){
	
	x.sort((a,b) => b-a);
	return x;

}




console.log(decroissant(numbers));