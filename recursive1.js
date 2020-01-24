var x = process.argv.slice(2)[0];

function factorial(x) {
	
  // This is the base case.
  if (x ==0 || x ==1) return 1;
  // This is the recursive one.
  else  
return x * factorial(x - 1);
 
}

console.log(factorial(x));



/*

on dit que fac(1) = 1
et que fac(n) = n * fac(n-1)

(par exemple 3) :

fac 3 :
   3 ne vaut pas 0 ni 1, donc je continue
   j'ai besoin de fac(n-1) : je calcule fac(2) :
       2 ne vaut pas 0 ni 1, donc je continue
       j'ai besoin de fac(n-1) : je calcule fac(1) :
            1 vaut 1, donc fac(1) renvoie 1
       fac(1) vaut 1, donc fac(2) renvoie 2 * fac(1) = 2 * 1 = 2
   fac(2) vaut 2, donc fac(3) renvoie 3 * fac(2) = 3 * 2 = 6

   nous avons du appeler plusieurs fois la fonction fac
    à chaque fois j'ai interrompu le calcul en cours (d'abord celui de fac(3),
    puis celui de fac(2)) pour calculer le résultat de fac(n-1), 
    avant de revenir au calcul en cours (multiplier par n, puis renvoyer le résultat).

par convention, la définition mathématique de la fonction factorielle précise que la factorielle de zéro est 1. Pour respecter cette convention,
 d'ou le test if ($n == 0)
*/
