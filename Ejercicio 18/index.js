'use strict'

function multiplicacion(num,num2){
let resultado = num * num2
return resultado
}
let num = Number(prompt("Ingresa un numero: "));
let num2 = Number(prompt("Ingresa otro numero: "));

let resultadoFinal = multiplicacion(num,num2)
alert(resultadoFinal)