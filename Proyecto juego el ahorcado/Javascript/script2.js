"use strict"

const palabraSecreta = ["tomate", "lechuga", "pepino", "casa", "perro", "caballo", "elefante", "dinamarca", "portugal", "cuba", "coche", "moto", "camion"]

let numeroPalabraElegida;

let palabraElegida;

let palabraConGuiones;

let letraElegida;

let palabraElegidaLetras;

let exito;

let vidas;

let puntuacion;

let palabraConGuionesHtml = document.querySelector(".guiones")

let contadorVidasHtml = document.querySelector(".vidas")

let contadorPuntuacionHtml = document.querySelector(".contador")

let cronometroHtml = document.querySelector(".cronometro")

let ventanaEmergenteHtml = document.querySelector(".ventanaEmergente")

let teclas = document.querySelectorAll(".letra")

let imagenAhorcadoHtml = document.querySelector("#imagen")

let fallosHtml = document.querySelector("#fallos")

let segundos;

let interval;

let arrayLetrasElegidas = []

let letrasFalladas = "";

const once = {
    once : true
};


function format(seconds){

    if(seconds < 10){

        return "0" + seconds;
    }
    return seconds;
}

function actualizarSegundos(){

    cronometroHtml.textContent = `00:${(format(segundos))}`

    if(segundos===0){

        clearInterval(interval)
    }

    perderPartida();
}

function iniciarTiempo(){

    clearInterval(interval)
    segundos = 60;
    cronometroHtml.textContent = "01:00"
    
    interval = setInterval(() => {
        segundos--
        actualizarSegundos()
    }, 1000)    
}

window.onload = function () {
    for (const letra of teclas){

        letra.addEventListener("click", () => pulsarTecla(letra),once)
    }
}

function inicializarVariables(){

    vidas = 6;
    puntuacion = 0;
    cambiarImagen()

    fallosHtml.innerHTML = ""

    for (let element of arrayLetrasElegidas)
    {
        /* console.log(element); */
        for (const letra of teclas){

            if(element === letra){
                /* console.log(element);
                console.log(letra); */
                arrayLetrasElegidas.splice(element)
                letra.addEventListener("click", () => pulsarTecla(letra),once)
                
            }
        }
        
    }

}

document.querySelector("#calcular").addEventListener("click", () => {

    iniciarTiempo();

    inicializarVariables()
    
    numeroPalabraElegida = Math.floor(Math.random()*palabraSecreta.length) 

    palabraElegida = palabraSecreta [numeroPalabraElegida]

    console.log(palabraElegida);

    palabraConGuiones = palabraElegida.replace(/./g, "_").split("");

    palabraConGuionesHtml.innerHTML=palabraConGuiones;

    console.log(palabraConGuiones);

    palabraElegidaLetras = palabraElegida.split("")

    ventanaEmergenteHtml.innerHTML =""
    
    contadorVidasHtml.innerHTML = vidas +" VIDAS";

    contadorPuntuacionHtml.innerHTML = puntuacion +" PUNTOS"

    /* for (const letra of teclas){
    
        letra.addEventListener("click", () => pulsarTecla(letra),once)  
    } */
})

function pulsarTecla(letra){

    console.log(letra.innerHTML);

    exito=comprobarLetra(letra)

    if(!exito){
        /* letrasFalladas += ` ${letra.innerHTML} ` */
        /* console.log(letrasFalladas); */
        fallosHtml.innerHTML += ` ${letra.innerHTML} `
    }

    actualizarVariables(exito)
}

function comprobarLetra(letra){

    arrayLetrasElegidas.push(letra);

    let acierto = false;

    let letraElegida = letra.innerHTML;


    for(let j=0; j< palabraElegida.length; j++){ 

        if (palabraElegidaLetras[j]===letraElegida.toLowerCase()){
            palabraConGuiones[j]=letraElegida;
            puntuacion++;
            acierto = true;
        }  
    }
    return acierto;
}

/* function fallarLetras(){

} */

function actualizarVariables(exito){

    if(exito){
        palabraConGuionesHtml.innerHTML=palabraConGuiones;
        contadorPuntuacionHtml.innerHTML = `${puntuacion} PUNTOS`
    }

    if(!exito && vidas >0 && puntuacion!=palabraElegida.length){
        vidas--;
        contadorVidasHtml.innerHTML = `${vidas} VIDAS`;
        cambiarImagen();
    }
    
    else if (puntuacion===palabraElegida.length){
        ganarPartida()
    }
    
    if(vidas===0){
        perderVidas()
    }  

}

function cambiarImagen(){
    
    imagenAhorcadoHtml.src = `./imagenes_ahorcado/hangman${vidas}.png`;

}

function perderPartida(){

    if (segundos <= 0){
        ventanaEmergenteHtml.innerHTML = `¡Tu tiempo se ha terminado! Has perdido. La palabra correcta era ${palabraElegida}`
        /* window.alert("¡Tu tiempo se ha terminado! Has perdido") */
    }
}

function perderVidas(){
    if(vidas <= 0){

        ventanaEmergenteHtml.innerHTML = `¡Fin del juego! Has superado los fallos permitidos. La palabra correcta era ${palabraElegida}`
        /* window.alert("¡Fin del juego! Has superado los fallos permitidos") */
        clearInterval(interval)
    }
}

function ganarPartida(){
    ventanaEmergenteHtml.innerHTML = "¡Felicidades! !Has ganado la partida!"
        clearInterval(interval)
}
