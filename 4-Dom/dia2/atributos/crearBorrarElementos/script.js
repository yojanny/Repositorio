"use strict"

const main = document.querySelector("main")


// CREAR ELEMENTOS
//.createElement("etiqueta")

const p = document.createElement("p")
p.style.color ="blue"

p.textContent = "Esto es un párrafo creado con JS"
console.log(p)


const img = document.createElement("img")

img.setAttribute("src", "https://static.wikia.nocookie.net/videojuego/images/a/a3/Squirtle.gif")

img.setAttribute("alt", "Imagen de squirtle")

console.log(img)


const compra = ["pan", "leche", "huevos", "tomate", "atún"]

const ul = document.createElement("ul")

for(const el of compra){
  const li = document.createElement("li")
  li.textContent = el

  ul.append(li)

}

console.log(ul)

//AÑADIR ELEMENTOS A OTROS
//padre.append(elemento)


//Para añadir al DOM, debemos añadir a algún elemento seleccionado del DOM
main.append(p, img, ul)




//FRAGMENT

const ol = document.querySelector("ol")

//Para evitar tocar el DOM en un bucle, creamos un fragment

const fragment = document.createDocumentFragment()


for(const el of compra){
  const li = document.createElement("li")
  
  li.textContent = el
  fragment.append(li)
}
console.log(fragment)

ol.append(fragment)

console.log(ol)
