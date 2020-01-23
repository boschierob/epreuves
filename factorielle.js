var entree =process.argv.slice(2)[0];
 n = parseInt(entree);


function factorielle(n) {
	result=1;

for (var i = 1; i <= n; i++) {
	result*= i;
}
console.log(result);
}

factorielle(n);