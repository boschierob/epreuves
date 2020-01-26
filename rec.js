
const fs = require('fs');
const c1 = fs.readFileSync("./"+process.argv[2],"utf8");
const c2 = fs.readFileSync("./"+process.argv[3],"utf8");
	
	//compter le nombre de cellule par ligne
	//compter le nombre de ligne(a l'aide du nombre de retours a la ligne
	

function searchCarre(c1,c2){
//gestion des retour a la ligne(\n) (RaL)
// car fausse le comptage des caracteres
	//on place l'ensemble des Ral dans un tableau pour pouvoir les compter ensuite
	let arr1 = [];//initialise le tableau des RaL pour c1
 	
	for( let item of c1){
	  if ( item === "\n" ) arr1.push( item );
	}
	
		let c1b = c1.split('\n');//chaque ligne du c1 un tableau
		//console.log ('c1b : '+(c1b[0][0]));
		;

		var ttl=c1b.length;
		//console.log('ttl : '+ttl);

	//enleve les Retours a la Ligne (RaL) sur c2
	
	
	let arr2 = [];//initialise le tableau des RaL pour c2
 	
	for( let item of c2){
	  if ( item === "\n" ) arr2.push( item );
	}
	//remplace dans c2 les RaL pour faire une chaine non tronquee.
		let c2b = c2.replace(/\n/g,'');//(replace() en global avec expression reguliere)
		//console.log(c2b);

		var ttl2=c2b.length;
		//console.log('ttl2 = '+ttl2)
		var nb_lines =  arr2.length+1;
		//console.log('l : '+nb_lines)
		var nb_col=(ttl2/nb_lines);
		//console.log('col : '+nb_col)
		//initialise position du terme recherche
		//position = position absolue dans la chaine
		var position = 0;
//iteration sur c1 pour trouver le nombre de ligne
for (var k = 0; k < c1b.length; k++) {
	
		var lines_c1 = c1b[k];
		//console.log('lines_c1 : '+lines_c1)
	//iteration dans chaque ligne de c1 pour ressortir chaque chiffre(cellule) de chaque ligne
	for (var j = 0; j < lines_c1.length; j++) {
		var cell_c1 = lines_c1[j]
		//console.log('cell_c1 : '+cell_c1)
	
	
		//iteration dans chaque element de c2 pour tester chaque element avec chaque element de c1
		for (var i = 0; i < c2b.length; i++) {
			var el_c2 = c2b[i];
			//console.log('c2b[i]:'+el_c2+' = '+' cell_c1 '+cell_c1);
			
					if(cell_c1 ==el_c2 ) {
						//console.log('c2b[i]: '+el_c2 +'|| c1b[j]: '+lines_c1)

							position =i;
							//console.log('position = '+position)
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
 
 console.log(searchCarre(c1,c2));

	
	