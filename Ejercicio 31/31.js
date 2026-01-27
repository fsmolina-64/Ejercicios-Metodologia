'use strict';

const contenedor = document.getElementById("contenedor");

const fila = document.createElement("div");
fila.style.display = "flex";
fila.style.alignItems = "center";

const foto = document.createElement("img");
foto.src = "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop";
foto.width = 120;


const texto = document.createElement("div");
texto.style.marginLeft = "20px";

const nombre = document.createElement("p");
nombre.textContent = "FELIPE SEBASTIAN";

const apellido = document.createElement("p");
apellido.textContent = "MOLINA BARROS";

// Armar todo
texto.appendChild(nombre);
texto.appendChild(apellido);
fila.appendChild(foto);
fila.appendChild(texto);
contenedor.appendChild(fila);
