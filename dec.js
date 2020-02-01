const numbers = process.argv.slice(2);
for (var i = 0; i < numbers.length; i++) {
				numbers[i] = parseInt(numbers[i]);
}
 
/*function decroissant(x){
	
	x.sort((a,b) => b-a);
	return x;

}
*/

/* PSEUDO CODE
 procédure tri_insertion(tableau T, entier n)
       pour i de 1 à n - 1

            # mémoriser T[i] dans x
            x ← T[i]                            

            # décaler vers la droite les éléments de T[0]..T[i-1] qui sont plus grands que x en partant de T[i-1]
            j ← i                               
            tant que j > 0 et T[j - 1] > x
                     T[j] ← T[j - 1]
                     j ← j - 1

            # placer x dans le "trou" laissé par le décalage
            T[j] ← x                            
*/
function tri_insertion (T,n){

	for (var i = 0; i <T.length; i++) {
	var x=T[i]	
	var j=i
	while(j>0 && T[j-1] < x ){
		T[j] = T[j-1]
		j=j-1
	}
	T[j]=x
		}
	
	return T;

}

function tri_insertion2 (T,n){

	for (var i = 0; i < T.length; i++) {
		var x = T[i];
		//var j=i;
		while(T[i-1]<x){
			T[i] = T[i-1] 
			i=i-1
		}
		T[i]=x
	}

	return T;

}
/*
procédure tri_selection(tableau t, entier n)
      pour i de 0 à n - 2
          min ← i       
          pour j de i + 1 à n - 1
              si t[j] < t[min], alors min ← j
          fin pour
          si min ≠ i, alors échanger t[i] et t[min]
      fin pour
  fin procédure



*/
function tri_selection(t){
		n=t.length;
	for (var i = 0; i < n-1; i++) {
		min=i;
		for (var j = i+1; j < n; j++) {
			if(t[j]>t[min]){
				min=j
			}
		}
		if(min!=i){
			var x = t[i];
			t[i]=t[min];
			t[min]=x;
		}
		
	}

	return t;

}

/*
tri_à_bulles(Tableau T)
   pour i allant de (taille de T)-1 à 1
       pour j allant de 0 à i-1
           si T[j+1] < T[j]
               échanger(T[j+1], T[j])
               */

function tri_à_bulles(Tableau){
	for (var ind01 = 0; ind01 < Tableau.length;ind01++)
  {
	var ind02 = ind01 + 1;
	while (Tableau[ind01] > Tableau[ind02])
	{
		temp = Tableau[ind01];
		Tableau[ind01] = Tableau[ind02];
		Tableau[ind02] = temp;
		ind02++;
	}
  }
		
	
  
	return Tableau;
}


console.log(tri_à_bulles(numbers));