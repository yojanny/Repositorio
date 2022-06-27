"use strict"

const arrayPalabras = ["tomate", "lechuga", "pepino", "casa", "perro", "caballo", "elefante", "dinamarca", "portugal", "cuba", "coche", "moto", "camion"]

let palabraElegida, palabraConGuiones;
let interval, segundos, exito, vidas, puntuacion;

let palabraConGuionesHtml = document.querySelector(".guiones")

let contadorVidasHtml = document.querySelector(".vidas")

let contadorPuntuacionHtml = document.querySelector(".contador")

let cronometroHtml = document.querySelector(".cronometro")

let ventanaEmergenteHtml = document.querySelector(".ventanaEmergente")

let teclas = document.querySelectorAll(".letra")

let imagenAhorcadoHtml = document.querySelector("#imagen")

let fallosHtml = document.querySelector("#fallos")

let arrayLetrasPalabraElegida = [];

let arrayLetrasElegidas = []

let letrasFalladas = []

let finalPartida = true;

const once = {
    once : true
};

function iniciarTiempo(){

    clearInterval(interval)
    segundos = 60;
    cronometroHtml.textContent = "01:00"
    
    interval = setInterval(() => {
        segundos--
        actualizarSegundos()
    }, 1000)    
}

function formato(segundos){

    if(segundos < 10){

        return `0${segundos}`
    }
    return segundos;
}

function actualizarSegundos(){

    cronometroHtml.textContent = `00:${(formato(segundos))}`

    if(segundos===0){

        clearInterval(interval)
        perderPartidaTiempo();
    }
    
}

window.onload = function () {
    for (const letra of teclas){

        /* letra.addEventListener("click", () => pulsarTecla(letra),once) */

        arrayLetrasElegidas.push(letra.textContent)
    }
}

function inicializarVariables(){

    vidas = 6;
    puntuacion = 0;
    finalPartida = false;
    cambiarImagen()

    fallosHtml.innerHTML = ""

    arrayLetrasElegidas.sort();
    
    for (let i=0; i< teclas.length; i++)
    {
        /* console.log(arrayLetrasElegidas); */
        for (const letra of teclas){
            /* console.log(letra.textContent); */

            if (arrayLetrasElegidas[i] === letra.textContent){
                
                let indice;
                indice =arrayLetrasElegidas.indexOf(arrayLetrasElegidas[i])
                arrayLetrasElegidas.splice(indice,1)

                letra.addEventListener("click", () => pulsarTecla(letra),once)
            }
        } 
    }

    console.log(arrayLetrasElegidas);
}

function elegirPalabra(){
    
    palabraElegida = arrayPalabras[Math.floor(Math.random()*arrayPalabras.length)]
        
    console.log(palabraElegida);

    arrayLetrasPalabraElegida = palabraElegida.split("")

    palabraConGuiones = palabraElegida.replace(/./g, "_").split("");

    console.log(palabraConGuiones);

}

function actualizarHtml(){

    palabraConGuionesHtml.innerHTML = palabraConGuiones;

    ventanaEmergenteHtml.innerHTML =""
    
    contadorVidasHtml.innerHTML = vidas +" VIDAS";

    contadorPuntuacionHtml.innerHTML = puntuacion +" PUNTOS"

}

document.querySelector("#calcular").addEventListener("click", () => {

    iniciarTiempo();

    inicializarVariables();

    elegirPalabra()

    actualizarHtml()


})

function pulsarTecla(letra){

    if (!finalPartida){

    console.log(letra.innerHTML);

    exito=comprobarLetra(letra)

    if(!exito){
        /* letrasFalladas += ` ${letra.innerHTML} `
        console.log(letrasFalladas); */
        fallosHtml.innerHTML += ` ${letra.innerHTML} `
    }

    actualizarVariables(exito)

    }
}

function comprobarLetra(letra){


    arrayLetrasElegidas.push(letra.textContent);

    let acierto = false;

    let letraElegida = letra.innerHTML;

    for(let j=0; j< palabraElegida.length; j++){ 

        if (arrayLetrasPalabraElegida[j]===letraElegida.toLowerCase()){
            palabraConGuiones[j]=letraElegida;
            puntuacion++;
            acierto = true;
        }  
    }
    return acierto;
}

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

function perderPartidaTiempo(){

    finalPartida = true

    ventanaEmergenteHtml.innerHTML = `¡Tu tiempo se ha terminado! Has perdido. La palabra correcta era ${palabraElegida}`
    
}

function perderVidas(){

    finalPartida = true

    ventanaEmergenteHtml.innerHTML = `¡Fin del juego! Has superado los fallos permitidos. La palabra correcta era ${palabraElegida}`

    clearInterval(interval)
}

function ganarPartida(){

    finalPartida = true

    ventanaEmergenteHtml.innerHTML = "¡Felicidades! !Has ganado la partida!"

    clearInterval(interval)
}