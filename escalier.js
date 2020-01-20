function escalier(n) { //Input or number of rows
   for (var i = 1; i <= n; i++) { //pour chaque ligne
     var str = "";//initialise la chaine de caractere de sortie
     for (var j = 1; j <= n; j++) { //pour chaque colonne
        (j >= n + 1 - i && j <= n) ? str += "#" : str += " "; //condition ternaire : verifier pour chaque cellule si # ou espace
      }
     console.log(str);
    }
}
escalier(90);