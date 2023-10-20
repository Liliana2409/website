//alert("Hola este es mi Javascript");

//let nombre = "Mundo canino";
//nombre = "Mundo canino"

//var nombre1 = "Mundo canino";

//const nombre2 = "Mundo canino";
//nombre2 = "Mundo canino"

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Mundo canino"

let titulo = document.querySelector(".logo .fuente-selector") 
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innertext; 
console.log(textoTitulo);

if(textoTitulo == "Nombre" ){
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}