// Afficher les nombres de 1 à 100
// Deux exceptions: afficher "Fizz" pour les chiffres divisibles par 3, afficher "Buzz" pour les chiffres divisibles par 5.
// Afficher "FizzBuzz" pour les nombres divisibles à la fois par 3 et 5.


module.exports = () => {
  let numbers = [];
  // Affichage des nombres 1 à 100
  for (let i = 1; i < 101; i++) {

    // Affichage des nombres divisibles à la fois par 3 et 5
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }

    // Affichage "Fizz" pour les nombres divisibles par 3
    else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {

      // Affichage "Buzz" pour les nombres divisibles par 5
      console.log("Buzz");

      // On affiche les nombres restants
    } else {
      console.log(i);
    }
    array.push(numbers);
  }

   return numbers;
}