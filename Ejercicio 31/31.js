'use strict';

const contenedor = document.getElementById("contenedor");

const fila = document.createElement("div");
fila.style.display = "flex";

const foto = document.createElement("img");
foto.src = "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop";
foto.width = 120;

const texto = document.createElement("div");
texto.style.marginLeft = "20px";

const nombre = document.createElement("p");
nombre.textContent = "FELIPE SEBASTIAN";

const apellido = document.createElement("p");
apellido.textContent = "MOLINA BARROS";

texto.appendChild(nombre);
texto.appendChild(apellido);

const foto2 = document.createElement("img");
foto2.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d";
foto2.width = 120;
foto2.style.marginLeft = "40px";

const texto2 = document.createElement("div");
texto2.style.marginLeft = "20px";

const nombre2 = document.createElement("p");
nombre2.textContent = "JUAN CARLOS";

const apellido2 = document.createElement("p");
apellido2.textContent = "PÉREZ LÓPEZ";

texto2.appendChild(nombre2);
texto2.appendChild(apellido2);

fila.appendChild(foto);
fila.appendChild(texto);
fila.appendChild(foto2);
fila.appendChild(texto2);

contenedor.appendChild(fila);
