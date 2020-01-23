var x = process.argv.slice(2)[0];

function factorial(x) {
	
  // This is the base case.
  if (x ==0 ) return 1;
  // This is the recursive one.
  else  
return x * factorial(x - 1);

 
}

console.log(factorial(x));

