'use strict';
let elementos = Number(prompt("Cuantos elementos quieres en tu array"));
function unputItems(size) {
    let nums = [];
    let i = 0;
    while (i < size) {
        let num = Number(prompt("Ingresa un elemento"));
        nums.push(num);
        i++;
    }
    return nums;
}
let resultado = unputItems(elementos);
alert(resultado);

