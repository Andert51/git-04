// ECMA script 6, funcion flecha
// La forma de compilarse un archivo html es linea, empieza de arriba a abajo

function saludar(){
    alert('Hello World')
}

console.log('Saludos desde terminal')

//Antes se usaba var mucho, pero con var se puede redefinir el valor cuantas veces se quiera

var a = 10
// var a = '10'

let b = 11
// // b ya no se puede redefinir

// const PI = 3.1416
//PI = 3.1417 // marcaria un error porque es una constante

console.log('@@@ concatenar =>', a + b)

let nombre = prompt('Cual es tu nombre')
console.log('@@ nombre => ', nombre)
console.log('@@ typeof =>', typeof nombre)

let edad = prompt('Cual es tu edad')
console.log('@@ nombre => ', parseInt(edad))
console.log('@@ typeof =>', typeof parseInt(edad))

//DOM son todos los elementos que tiene una pagina web, visibles o no, creados, se ven en elementos

//Ver elementos del DOM
console.log('@@ document => ', document)
console.log('@@ document => ', document.head)
console.log('@@ document => ', document.body)
console.log('@@ document => ', document.title)
console.log('@@ document => ', document.domain) // Se tacha porque esta desactualizado

document.title = 'Cambiado desde JS'

//Obtener elemento por ID, getElementById('Id') getElementByClassName('class') getElementbyTabName('div)
//querySelector(selector) '#id' '.clase' 'div'  //Tres tipos de selectores que hay
//querySelectorAll //seleccionartodo
//createElement('elemento') //crear elementos en el dom
//createDocumentFragment() //copiar fragmentos

//evento de DOM para que se carge todo primero antes de realziar mas cosas

//este evento es, hasta que no se carga todo lo del DOM no se hace lo siguiente
document.addEventListener('DOMContentLoaded', () => {
    console.log('@@@ dom => carga todo' )
    console.log(document.querySelector('h1'))
}) //Para leer un evento
