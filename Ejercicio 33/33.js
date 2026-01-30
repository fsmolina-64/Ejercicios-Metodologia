'use strict';

function indiceDelEspacio(phrase) {
    let indexFound = -1;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] == " ") {
            indexFound = i;
        }
    }
    return indexFound;
}
let frase = "hola mundo"
indiceDelEspacio(frase);
let primeraPalabra = frase.substring(0, indice);
let segundaPalabra = frase.substring(indice+1);
alert(primeraPalabra);
alert(segundaPalabra);