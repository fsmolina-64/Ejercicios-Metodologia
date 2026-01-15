'use strict'

let edad = Number(prompt("Ingrese su edad"));
let años = Number(prompt("Ingrese sus años trabajando"));

if (edad > 60 || años >= 30) {
    alert (" Usted se puede jubilar ");
}else{
    alert (" Usted aun no se puede jubilar ");
}
