"use strict"



const titulo = document.querySelector("h1")

const input = document.querySelector("input")

const img = document.querySelector("img")


//VER EL VALOR DE UN ATRIBUTO es 
// .getattribute("atributos")



console.log(titulo.getAttribute("lang"))

console.log(titulo.getAttribute("title"))

console.log(input.getAttribute("type"))


// Establecer el valor de un atributo (si lo tiene, lo cambia; si no lo tiene, lo añade)
//.setAttribute("atributo", "valor")

input.setAttribute("type", "password")

input.setAttribute("disabled", true) 

img.setAttribute("src", "https://static.wikia.nocookie.net/videojuego/images/a/a3/Squirtle.gif/")

img.setAttribute("alt", "Imagen de squirtle")


// Comprobar si tiene un atributo
//.hasAttribute("atributo")

console.log(titulo.hasAttribute("lang"))

console.log(titulo.hasAttribute("title"))

console.log(input.hasAttribute("disabled"))


//Quitar atributos
//.removeAttribute("atributo")

input.removeAttribute("disabled")


///////
// ATRIBUTOS PERSONALIZADOS (data-)

//dataset

console.log(titulo.dataset)
console.log(titulo.dataset.autor)
titulo.dataset.fecha = "15/06"

input.dataset.fecha = "16/06"


