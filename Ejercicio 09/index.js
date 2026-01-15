'use strict';

let cantidad = Number(prompt("Ingrese la cantidad de productos"));

let precio = Number(prompt("Ingrese el precio"));

let subtotal = cantidad * precio

if (subtotal<20) {
    alert (" Valor total es " + (subtotal + 1 ));
}
if (subtotal>20) {
    alert (" Valor total es " + subtotal );
}
