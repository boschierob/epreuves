
const fs = require('fs');
const c1 = fs.readFileSync("./"+process.argv[2],"utf8");
const c2 = fs.readFileSync("./"+process.argv[3],"utf8");
	
	//compter le nombre de cellule par ligne
	//compter le nombre de ligne(a l'aide du nombre de retours a la ligne
	

function searchCarre(c1,c2){
	//enleve les Retours a la Ligne (RaL) sur c2
	// car fausse le comptage des caracteres
	//on place l'ensemble des Ral dans un tableau pour pouvoir les compter ensuite
	
	let arr = [];//initialise le tableau des RaL
 	
	for( let item of c2){
	  if ( item === "\n" ) arr.push( item );
	}
	
		let c2b = c2.replace(/\n/g,'');//(replace() en global avec expression reguliere)
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
						

						//calculer nb de colonnes(vertical)
						//le nombre de caracteres / nombre de lignes
						var nb_col=(c2b.length/nb_lines);
						var position_y = (Math.floor(position/nb_col));
						
						return position_x+','+position_y; 

					}
				}
			} 
		}


	}	
 
 console.log(searchCarre(c1,c2));

	
	