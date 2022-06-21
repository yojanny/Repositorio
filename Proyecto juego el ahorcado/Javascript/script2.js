"use strict"

const palabraSecreta = ["tomate", "lechuga", "pepino", "casa", "perro", "caballo", "elefante", "dinamarca", "portugal", "cuba", "coche", "moto", "camion"]

let numeroPalabraElegida;

let palabraElegida;

let palabraConGuiones;

let letraElegida;

let palabraElegidaLetras;

let exito;

let vidas = "6";

let contador = 0;

let palabraConGuionesHtml = document.querySelector(".guiones")

let contadorVidasHtml = document.querySelector(".vidas")

let contadorPuntuacionHtml = document.querySelector(".contador")

const teclas = document.querySelectorAll(".letra")


document.querySelector("#calcular").addEventListener("click", () => {

    numeroPalabraElegida = Math.floor(Math.random()*palabraSecreta.length) 

    palabraElegida = palabraSecreta [numeroPalabraElegida]

    console.log(palabraElegida);

    palabraConGuiones = palabraElegida.replace(/./g, "_").split("");

    palabraConGuionesHtml.innerHTML=palabraConGuiones;

    console.log(palabraConGuiones);

    palabraElegidaLetras = palabraElegida.split("")

    contadorVidasHtml.innetHTML = vidas;
})


for (const letra of teclas){
    
    letra.addEventListener("click", () => {
                
        console.log(letra.innerHTML);

        exito=0;

        for(let j=0; j< palabraElegida.length; j++){ 

            if(palabraElegidaLetras[j]===letra.innerHTML.toLowerCase()){
                palabraConGuiones[j]=letra.innerHTML;
                palabraConGuionesHtml.innerHTML=palabraConGuiones;
                contadorPuntuacionHtml.innerHTML = ++contador;
                exito=1;
            }
            
        }

        if(exito===0){
            contadorVidasHtml.innerHTML = --vidas;
        }  
    }) 
}
