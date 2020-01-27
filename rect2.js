
const fs = require('fs');
const c1 = fs.readFileSync("./"+process.argv[2],"utf8");
const c2 = fs.readFileSync("./"+process.argv[3],"utf8");
	
	//compter le nombre de cellule par ligne
	//compter le nombre de ligne(a l'aide du nombre de retours a la ligne
	

function searchCarre(c1,c2){

//extraire chaque ligne de chaine de catactere de c1
	function split(chaine){
		var splitted = chaine.split('\n');
		return splitted;
	}


	

		var c1Splitted = split(c1);
		//return c1Splitted;

		

//extraire chaque ligne de chaine de caractere de c2
	var c2Splitted = split(c2);

var indexTab = []
var position_y;
	var trouve = false;

	do{
		for (var i = 0; i < c1Splitted.length; i++) {
			console.log('instances de c1 :'+c1Splitted[i]) ;
		
			for (var j = 0; j < c2Splitted.length; j++) {
				c2Splitted[j]
				if(c2Splitted[j].indexOf(c1Splitted[i])>=0){
					if(c2Splitted[j+1].indexOf(c1Splitted[i+1])>=0){
						if(c2Splitted[j+2].indexOf(c1Splitted[i+2])>=0){
							
								var index = c2Splitted[j].indexOf(c1Splitted[0]);
								
								indexTab.push(index);

					}	}
				}
			}
		}
	} while(trouve)
	


	


position_y=indexTab[0];
	//indexOf
	
console.log('position y = '+position_y)
	
}
console.log(searchCarre(c1,c2));

	
	