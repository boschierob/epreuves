const tab = process.argv.slice(2);


function decroissant(tab) {
	var changed;//
	do	{
			changed=false;//
			for (var i = 0; i < tab.length -1; i++) {
				tab[i] = parseInt(tab[i]);
					var temp;
					if (tab[i] < tab[i+1]) {
								temp = tab[i];
								tab[i] = tab[i+1];
								tab[i+1] = temp;
								changed=true;
		
					} 
				
			}
		} while (changed);

}



decroissant(tab);
console.log(tab);

/*
Dans chaque boucle, les paires successives des éléments sont comparées 
et permutées si nécessaire.
S’il y a N éléments à trier, le tri à bulles fait N-1 pour traverser le tableau.
*/

