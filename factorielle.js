var entree =process.argv.slice(2)[0];
 n = parseInt(entree);


function factorielle(n) {
	if(n==0){
		return 1;
	}
	result=1;

for (var i = 1; i <= n; i++) {
	result*= i;
}
return (result);
}

console.log(factorielle(n));