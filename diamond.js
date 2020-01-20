function diamond(n){

	for(let i = 1; i<= n/2; i++) {	
		var str = '';

		for(let j = 1; j<=n; j++) {
			
				if(j>= 5-i && j<= 3+i) {
					str+= "*";
				}
				else {
					str+= " ";
				}

		}
	console.log(str)
	}

	for(let i =n/2; i<=n; i++){

		var str = "";

		for(let j=1; j<=n; j++){

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



diamond(7)