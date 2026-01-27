'use strict';

const contenedor = document.getElementById("contenedor");

const nuevoParrafo = document.createElement("h1");
nuevoParrafo.textContent = "Estudiantes.";

const students = ["María", "José", "Carmen", "Antonio", "Ana", "Luis"];

const nuevaLista = document.createElement("ol");

students.forEach((student) => {
    const item = document.createElement("li");
    item.textContent = student;
    nuevaLista.appendChild(item);
});
contenedor.appendChild(nuevoParrafo);
contenedor.appendChild(nuevaLista);
