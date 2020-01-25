function dichotomie () {

	
	a=2;
	b=4;

	P=0.01;
	T=b-a;

	x=(a+b)/2;
	y=x*x*x - 7*x - 1;

	while(T>P){
		if (y>0) {
			b=x;
		}
		else {
			a=x;
		}
	T=b-a;

	}
	

	return "resultat entre"+ a + " et " + b;

}


console.log(dichotomie());
