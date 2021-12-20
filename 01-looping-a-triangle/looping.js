// Créer une fonction loopingTriangle(a)
module.exports = (sizeTriangle) => {
    // Afficher une liste de number de la taille du paramètre
    let counter = '';
    let array = [];
    for (let i = 0; i < sizeTriangle; i++) {
        // Ajouter un # par ligne
        counter += '#';
        array.push(counter);
    }
    return array;
}




