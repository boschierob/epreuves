
const fs = require('fs');
const c1 = fs.readFileSync("./"+process.argv[2],"utf8");
const c2 = fs.readFileSync("./"+process.argv[3],"utf8");
	
	//compter le nombre de cellule par ligne
	//compter le nombre de ligne(a l'aide du nombre de retours a la ligne
	const c1b = function (c1){
		for (var i = 0; i < c1.length; i++) {
			lecture =c1[i];
			return lecture;
		}


	}

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

		var ttl=c2b.length;
		console.log('ttl = '+ttl)
		var nb_lines =  arr.length+1;
		console.log('l : '+nb_lines)
		var nb_col=(ttl/nb_lines);
		console.log('col : '+nb_col)
		//initialise position du terme recherche
		//position absolue dans la chaine
		var position = 0;


			
		for (var i = 0; i < c2b.length; i++) {
			for (var j = 0; j < c1.length; j++) {
				
					if(c2b[i] == c1[j]) {
						if (c2b[i+1]==c1[j+1]) {
							if(c2b[i+2]==c1[j+2]){


							position =i;
							console.log('i = '+i)
							//position /nb de ligne
							var position_x;
							var position_y;

								if(nb_col<position){
									 position_x = position%nb_col;
  
								}
								else if(nb_col>position){
									position_x = position%nb_lines;

								}
							
							//calculer nb de colonnes(vertical)
							//le nombre de caracteres / nombre de lignes
							if (nb_col<position) {

								position_y = Math.floor(position/nb_col);
							}

							
							else{
								position_y = 0;//des qu'on depasse le nombre entier, nous sommes a la ligne du dessus
							//indice commence a 0 donc on retire 1.

							}
							
							
							return position_x+','+position_y; 



							}
						}
					}







							
							
					
			
						

				
			}
		} 
			
}	
 
 console.log(searchCarre(c1,c2));

	
	