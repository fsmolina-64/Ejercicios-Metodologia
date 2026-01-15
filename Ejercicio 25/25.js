'use strict'
let phone = "0877852635";
let arrayTexto = phone.split("");
let arrayNumeros = arrayTexto.map(item => Number(item));
let arrayCortado = arrayNumeros.slice(0, 19);
let arraySumado = arrayCortado.map((item, index) => {
  if (index == 0) {
    return item;
  } else {
    return item + 1;
  }
});
let arrayFinal = [].concat(arraySumado);
let result = arrayFinal.join("");
alert(result);
//0988963746