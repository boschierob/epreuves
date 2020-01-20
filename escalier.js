var result = [];
var space = [];

function escalier(n) {

	for (let i=1;i<=n;i++) {
				
		 space.push(" ");
		str1 = space.join('');
		result.push("#");
		str2 = result.join('');
		console.log(str1.concat(str2));
	}
	
}

escalier(4);