"use strict";

//MOVERSE POR EL DOM

const lista = document.querySelector("ul")

console.log(lista)
console.log(lista.querySelectorAll("li"))


//Elementos hijos
const hijos = lista.children

console.log(hijos)

//Primer hijo
const primero = lista.firstElementChild
console.log(primero)

// Último hijo
const ultimo = lista.lastElementChild
console.log(ultimo)



//// Hermanos
const tercero = hijos[2]
console.log(tercero)

//Hermano previo
const anterior = tercero.previousElementSibling

console.log(anterior)

//Hermano siguiente
const siguiente = tercero.nextElementSibling
console.log(siguiente)


// Padre
const padre = tercero.parentElement

console.log(padre)
