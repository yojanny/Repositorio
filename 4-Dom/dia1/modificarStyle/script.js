"use strict"

//MODIFICAR ESTILOS

//La propiedad style nos permite leer y modificar los estilos del elemento

//OJO! en realidad es el atributo style (estilos en linea)

const titulo = document.querySelector("h1")

// esto sale vacio por que no esta en el atributo style
console.log(titulo.style.fontFamily)
/* Las propiedades son las mismas pero el lowerCamelCase: font - family = fontFamily */

//ESTE si sale porque esta en linea
console.log(titulo.style.color)

// Para leer los estilos que realmente tiene
console.log(window.getComputedStyle(titulo).fontFamily)

//MODIFICAR ESTILOS

titulo.style.color = "purple"

titulo.style.color = "rgb(150, 50, 200)"

titulo.style.fontFamily = "3rem"

titulo.style.background = "#fabada"

titulo.style.cssText = "color: blueviolet; background: lightblue; font-style: italic"