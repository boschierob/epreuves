
//const readline = require('readline');
	const fs = require('fs');

	const c1 = fs.readFileSync("./"+process.argv[2],"utf8");
	const c2 = fs.readFileSync("./"+process.argv[3],"utf8");
	
	//compter le nombre de cellule par ligne
		//compter le nombre de ligne(a l'aide du nombre de retours a la ligne
		
  let arr = [];
  let chr = "\n";
 
for( let item of c2){
  if ( item === chr ) arr.push( item );
}
//enleve les retour a la ligne car errone le comptage des caracteres(replace en global avec expression reguliere)
let c2b = c2.replace(/\n/g,'');
//console.log(c2b);

 
var nb_lines =  arr.length+1;
//console.log(nb_lines);
//initialise position du terme recherche
	//position absolue dans la chaine
var position = 0;
	

	for (var i = 0; i < c2b.length; i++) {
		if(c1[0]==c2b[i]){
			if(c1[1]==c2b[i+1]) {
				if(c1[2]==c2b[i+2]){

					position =i;
					//position /nb de ligne
				var position_x = position/nb_lines ;
					//console.log(position_x);
					//calculer nb de colonnes(vertical)
					//le nombre de caracteres / nombre de lignes
					var nb_col=(c2b.length/nb_lines);
					var position_y = (Math.floor(position/nb_col));
					//console.log(Math.floor(position/nb_col));
					console.log(position_x+','+position_y); 

				}
			}
		} 
	}


	//console.log(position_x);
	