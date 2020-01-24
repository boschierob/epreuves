// le tableau à trier
var liste = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// Création d'objet temporaire qui contient les positions
// et les valeurs en minuscules
var mapped = liste.map(function(e, i) {
  return { index: i, value: e.toLowerCase() };
})

// on trie l'objet temporaire avec les valeurs réduites
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// on utilise un objet final pour les résultats
var result = mapped.map(function(e){
  return liste[e.index];
});

console.log(result);

//var map = Array.prototype.map;
var txt="le chat se promene"
var a = Array.prototype.map.call(txt, function(x) { return x.toString(); });

var b = Array.from(txt);

//console.log(map);
/*
var txt="le chat se promene"
var a = Array.prototype.map.call(txt, function(x) { return x.toString(); });
				DONNE :
[
  'l', 'e', ' ', 'c', 'h',
  'a', 't', ' ', 's', 'e',
  ' ', 'p', 'r', 'o', 'm',
  'e', 'n', 'e'
]*/
console.log(b);