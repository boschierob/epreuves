var str=process.argv.slice(2)[0]; //recuperer l'argument


function upperAndLower(str){

var str2 = str.toLowerCase();//on met tout en lower
var lstr = str2.replace(/ /g,'  ')		// on remplace chaque espace par deux caracteres (--)
// comme ca les espace n'influenront pas sur les index de tableau ( si pair ou impair)
var arraystr = lstr.split('');
var strUppLow= "";

for (var i = 0; i < arraystr.length; i++) {
	lettre = lstr[i];
				
			 if(i%2==0){
			strUppLow += lettre.toLowerCase();
		}
			else{
			strUppLow += lettre.toUpperCase();
		}
		
}

return strUppLow.replace(/'  '/g,' ');//on remet les espaces initiaux

}

console.log(upperAndLower(str));

