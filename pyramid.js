function pyramid (n){

	for(let i =1; i<=n; i++){

		var str = "";

		for(let j=1; j<=(n*2); j++){

			if(j>=n+1-i && j<=n-1+i)
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

pyramid(4);