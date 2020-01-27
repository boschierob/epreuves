/**
 * @var Arr(array) tableau à permuter
 * @var first(int) premier index à prendre en compte
 * @return (string) affiche dans les logs le tableau permuté

 var t=[];
function anagramma(t, index){

if ((t.length - index )<=1) {

	console.log(t.join('-'));


}	else{
	for (var i = 0; i < t.length-index; i++) {
		t[i]
	}
}




}



// déclanche la fonction
anagramma([1, 2, 'a'], 0);

 */



const fs = require('fs');
const entree = process.argv[2];
const fichier = fs.readFileSync("./"+process.argv[3],"utf8");

var result = []

var liste = []

liste = fichier.split('\n')
//console.log(liste)



	//
liste2=[]
//return entree.split('').sort();
 for (var i = 0; i < liste.length; i++) {
 	if(liste[i].split('').sort().join() === entree.split('').sort().join()){

 		// return true 
 		 liste2 += (liste[i]+' ');
 	}
 	//return false
 
 	
 	}
 	return liste2;
//return entree.split('').sort()
//return liste[0].split('').sort()
//return liste[0].split('').sort().join() === entree.split('').sort().join()


}



//console.log(isAnagrammeOf(entree,liste));

























