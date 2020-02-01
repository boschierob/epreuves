const fs = require('fs');
const x = fs.readFileSync("./"+process.argv[2],"utf8");

function solution(file){



	const n_col = 11;
	const n_l = 11;
	
	var tab = file.split('\n')

	var trou=[];
	

	
	
//----------------------LES FONCTIONS ---------------------//

//cherche index qui sont vides
/*for (var i = 0; i < tab.length; i++) {
	if(tab[i]=='_'){
		trou.push(i)
	}
}
trou.push(i)
*/

		//------------//chercher indice manquant
		for (var i = 0; i < tab.length; i++) {
		trou.push(tab[i].indexOf('_')) 
	}
	//console.log('trous dans y : '+ trou)


		//ou  ---------------------//
		function indice(ligne){
			var id=0
			
				id = tab[ligne].indexOf('_')
			
			return id
		
	}


	//return indice(0)


	//----------------//remplir les lignes avec un chiffre de un a neuf unique
	function replace(y){
		//console.log('y avant iter: '+y)
		
		
		for (var i = 0; i < y.length; i++) {
		
			

			if(y[i]=='_'){
				//console.log('index : '+i)
				var col = renvoi_col(i)


					
				for (var j= 1; j <=9; j++) {
					if(y.includes(j)==false && col.includes(j)==false){
						y[i]=j
						
						//console.log('valeur j = '+j)
						//possibles.push(j)
						//console.log(possibles.join('')[1])
					y=y.replace('_',j)
						//verif colonne
						

					}
				}
			}

		}
		
		
		return y
		
	}
 
			
 

	//-------------//renvoi la colonne de l'indice 	
			function renvoi_col(x){
				var col=[
					[tab[0][0],tab[1][0],tab[2][0],tab[4][0],tab[5][0],tab[6][0],tab[8][0],tab[9][0],tab[10][0]],
					[tab[0][1],tab[1][1],tab[2][1],tab[4][1],tab[5][1],tab[6][1],tab[8][1],tab[9][1],tab[10][1]],
					[tab[0][2],tab[1][2],tab[2][2],tab[4][2],tab[5][2],tab[6][2],tab[8][2],tab[9][2],tab[10][2]],
					[tab[0][3],tab[1][3],tab[2][3],tab[4][3],tab[5][3],tab[6][3],tab[8][3],tab[9][3],tab[10][3]],
					[tab[0][4],tab[1][4],tab[2][4],tab[4][4],tab[5][4],tab[6][4],tab[8][4],tab[9][4],tab[10][4]],
					[tab[0][5],tab[1][5],tab[2][5],tab[4][5],tab[5][5],tab[6][5],tab[8][5],tab[9][5],tab[10][5]],
					[tab[0][6],tab[1][6],tab[2][6],tab[4][6],tab[5][6],tab[6][6],tab[8][6],tab[9][6],tab[10][6]],
					[tab[0][7],tab[1][7],tab[2][7],tab[4][7],tab[5][7],tab[6][7],tab[8][7],tab[9][7],tab[10][7]],
					[tab[0][8],tab[1][8],tab[2][8],tab[4][8],tab[5][8],tab[6][8],tab[8][8],tab[9][8],tab[10][8]],
					[tab[0][9],tab[1][9],tab[2][9],tab[4][9],tab[5][9],tab[6][9],tab[8][9],tab[9][9],tab[10][9]],
					[tab[0][10],tab[1][10],tab[2][10],tab[4][10],tab[5][10],tab[6][10],tab[8][10],tab[9][10],tab[10][10]]
					]

					
					 var col=col[x].join('');
					 return col
			/*var col
			for (var i = 0; i < tab.length; i++) {
				for (var j = 0; j < tab.length; j++) {
					col+=tab[j][id]
					
				}
			return col;
			//console.log(col)
			*/

			}
		//console.log(tab[0][0]+tab[1][0]+tab[2][0])
	


//console.log(col.join(''))

//console.log('trou : '+trou)

	//fonction replace

	//iteration de la fonction sur tableau
	for (var i = 0; i < tab.length; i++) {
		//console.log ('tab['+i+'] = '+tab[i])

		tab[i]= replace(tab[i])
			}

	//console.log(tab[1][1])
//
//return replace(tab)

 return replace(tab)


}




console.log(solution(x));



