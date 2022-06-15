

// las clases tambien funcionan como un objeto

// para preguntar si tiene una clase hacemos console.log(parrafo ,titulo etc, que queremos saber si lo tiene.classList.contains("lo que tiene"))
/* para añadir una nueva clase es mejor utilizar el className, en vez de usar classList, add */

"use strict";

const h1 = document.querySelector("h1")
const p = document.querySelector("p")

console.log(h1, p)


// CLASES
// propiedad objeto .classList

console.log(h1.classList)

//Añadir clases
//add("clase")

p.classList.add("blue")


//Quitar clases
//.remove("clase")

h1.classList.remove("blue")


//Añadir si no tiene, quitar si tiene
//.toggle("clase")

h1.classList.toggle("subrayado")
p.classList.toggle("subrayado")


//Comprobar si tiene una clase
//.contains("clase")

console.log(p.classList.contains("big"))
console.log(p.classList.contains("subrayado"))


// Reemplazar una clase
//.replace("claseAntigua", "claseNueva")

p.classList.replace("blue", "sans")
h1.classList.replace("blue", "sans") //si no tiene la clase, no hace nada

///////
// La propiedad className del elemento es el atributo class. Si la leo veo todas sus clases como un único string
//Si la cambio, quitaré TODO lo que tenía para meter lo nuevo
console.log(p.className)
h1.className = "blue sans"
