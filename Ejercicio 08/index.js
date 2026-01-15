'use strict';
let km = Number(prompt("Ingrese los kilometros"));
let kmp = km * 0.25;
let kma = kmp + 0.50;
alert (" Subtotal " + kma);
if (kma<1.50) {
    alert (" Valor total es 1.50" );
}
if (kma>1.50) {
    alert (" Valor total es " + kma );
}