// Afficher les nombres de 1 à 100
// Deux exceptions: afficher "Fizz" pour les chiffres divisibles par 3, afficher "Buzz" pour les chiffres divisibles par 5.
// Afficher "FizzBuzz" pour les nombres divisibles à la fois par 3 et 5.


module.exports = () => {
  let numbers = [];
  // Affichage des nombres 1 à 100
  for (let i = 1; i <= 100; i++) {

    // Affichage des nombres divisibles à la fois par 3 et 5
    if (i % 3 == 0 && i % 5 == 0) {
      numbers.push("FizzBuzz");
    }

    // Affichage "Fizz" pour les nombres divisibles par 3
    else if (i % 3 == 0) {
      numbers.push("Fizz");
    } else if (i % 5 == 0) {

      // Affichage "Buzz" pour les nombres divisibles par 5
      numbers.push("Buzz");

      // On affiche les nombres restants
    } else {
      numbers.push(i);
    }
    
  }

   return numbers;
}