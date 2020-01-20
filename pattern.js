function p(h, w) {
  w = w || 1;
  if (h === 1) {
    console.log('*'.repeat(w));
  } else if (h > 1) {
    console.log(' '.repeat(h-1) + '*'.repeat(w));
    p(h-1, w+2);
  }
}
 
p(10);




function pyramid (n){

	for(let i =1; i<=n; i++){

		var str = "";

		for(let j=1; j<=(n)*2; j++){

			if(j>=i-n+4 && j<=n-i+4)
				{
				str +="*";
			}
			else {
				str += " ";
			}

		}

	console.log(str);

	}


}