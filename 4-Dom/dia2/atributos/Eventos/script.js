"use strict"

const titulo =document.querySelector("h1")

const boton = document.querySelector("button")

const body = document.querySelector("body")

console.log(titulo, boton)

// AÑADIR EVENT LISTENER
//Decirle a un elemento que este pediente de si se produce un evento en el

//el metodo addEventListener("evento",callback)
//Evento:el evento e la lista de eventos(cuando pasaran), callback: que pasara

function buttonClickHandler (){
    console.log("click en el boton")
}

boton.addEventListener("click",()=>{
    console.log("click en el boton")
} )

const titleClickHandler = () =>{
    console.log("click en el titulo")
}

titulo.addEventListener("click", titleClickHandler)

titulo.addEventListener("mouseover", ()=>{
    console.log("has pasado el raton")
})


// las ventajas de utilizar funciones con nombres es que podemos quitar EVENT LISTENER
//.removeEventListener("evento", callback)
// En este caso el callback tiene que tener nombre y debimos haberlo añadido con ese nombre

boton.removeEventListener("click", buttonClickHandler)

