"use strict"

const palabraSecreta = ["tomate", "lechuga", "pepino", "casa", "perro", "caballo", "elefante", "dinamarca", "portugal", "cuba", "coche", "camion", "moto"]

/* console.log(palabraSecreta); */

/* console.log(palabraSecreta.length); */

const numeroPalabraElegida = Math.floor(Math.random()*palabraSecreta.length)

const palabraElegida = palabraSecreta [numeroPalabraElegida]

console.log(palabraElegida);

const input = document.querySelector("input")

console.log(input);

const botonEmpezar = document.querySelector("button")

console.log(botonEmpezar);

const palabraElegidaLetras = palabraElegida.split("")

console.log(palabraElegidaLetras);

for (let i=0; i<palabraElegida.length; i++){

    
}


/* const palabraElegidaGuiones = palabraElegida.replace("palabraSecreta" , "_")

console.log(palabraElegidaGuiones); */

/* console.log(palabraElegida+"_"+palabraElegidaGuiones); */