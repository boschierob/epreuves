function escalier(n){
	

	for(i=1 ; i<=n; i++) {
		var str = "";
		
		for(j=1; j<=n; j++) {
			if (j>=n+1-i && j<= n){
				str += "#";
			}
			else {
				str += " ";
			}
		}
	console.log(str);
	}
}

escalier(4);