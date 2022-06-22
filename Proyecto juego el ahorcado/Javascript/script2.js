"use strict"

const palabraSecreta = ["tomate", "lechuga", "pepino", "casa", "perro", "caballo", "elefante", "dinamarca", "portugal", "cuba", "coche", "moto", "camion"]

let numeroPalabraElegida;

let palabraElegida;

let palabraConGuiones;

let letraElegida;

let palabraElegidaLetras;

let exito;

let vidas;

let contador;

let palabraConGuionesHtml = document.querySelector(".guiones")

let contadorVidasHtml = document.querySelector(".vidas")

let contadorPuntuacionHtml = document.querySelector(".contador")

let cronometroHtml = document.querySelector(".cronometro")

let ventanaEmergenteHtml = document.querySelector(".ventanaEmergente")

let teclas = document.querySelectorAll(".letra")

let imagenAhorcadoHtml = document.querySelector("#imagen")

let cronometro;

let interval;

function format(seconds){
    if(seconds < 10){
        return "0" + seconds;
    }
    return seconds;
}

function actualizarSegundos(){
    let segundos = cronometro

    cronometroHtml.textContent = `00:${(format(segundos))}`

    if(cronometro===0){
        clearInterval(interval)
    }
    perderPartida();
}

function empezar(){
    clearInterval(interval)
    cronometro = 60;
    interval = setInterval(() => {
        cronometro--
        actualizarSegundos()
    }, 1000)    
}

document.querySelector("#calcular").addEventListener("click", () => {

    empezar();

    vidas = 6;

    cambiarImagen();

    contador = 0;

    numeroPalabraElegida = Math.floor(Math.random()*palabraSecreta.length) 

    palabraElegida = palabraSecreta [numeroPalabraElegida]

    console.log(palabraElegida);

    palabraConGuiones = palabraElegida.replace(/./g, "_").split("");

    palabraConGuionesHtml.innerHTML=palabraConGuiones;

    console.log(palabraConGuiones);

    palabraElegidaLetras = palabraElegida.split("")

    ventanaEmergenteHtml.innerHTML =""
    
    contadorVidasHtml.innerHTML = vidas +"VIDAS";

    contadorPuntuacionHtml.innerHTML = contador +"PUNTOS"
})


for (const letra of teclas){
    
    letra.addEventListener("click", () => {
                
        console.log(letra.innerHTML);

        exito=0;

        for(let j=0; j< palabraElegida.length; j++){ 

            if(palabraElegidaLetras[j]===letra.innerHTML.toLowerCase()){
                palabraConGuiones[j]=letra.innerHTML;
                palabraConGuionesHtml.innerHTML=palabraConGuiones;
                
                if(contador<palabraElegida.length){
                    contadorPuntuacionHtml.innerHTML = ++contador +"PUNTOS";
                }
                exito=1;
            }  
        }

        if(exito===0 && vidas >0 && contador!=palabraElegida.length){
            contadorVidasHtml.innerHTML = --vidas;
            cambiarImagen();
        }
        
        else if (contador===palabraElegida.length){
            ganarPartida()
        }
        
        if(vidas===0){
            perderVidas()
        }
        
        
    }) 
}

function cambiarImagen(){
    
    const source= `./imagenes_ahorcado/hangman${vidas}.png` 
    const imagen = imagenAhorcadoHtml;
    imagen.src = source;

}

function perderPartida(){
    if (cronometro <= 0){
        ventanaEmergenteHtml.innerHTML = "¡Tu tiempo se ha terminado! Has perdido"
        /* window.alert("¡Tu tiempo se ha terminado! Has perdido") */
    }
}

function perderVidas(){
    if(vidas <= 0){
        ventanaEmergenteHtml.innerHTML = "¡Fin del juego! Has superado los fallos permitidos"
        /* window.alert("¡Fin del juego! Has superado los fallos permitidos") */
        clearInterval(interval)
    }
}

function ganarPartida(){
    ventanaEmergenteHtml.innerHTML = "¡Felicidades! ¡Has acertado la palabra";
    clearInterval(interval)

}

