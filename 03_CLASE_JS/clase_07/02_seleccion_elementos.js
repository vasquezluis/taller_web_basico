/**
 * Seleccionar elementos del DOM
 * con getElementById, getElementsByClassName, getElementsByTagName
 */

// Seleccionar un elemento por su ID
const link_ul = document.getElementById("links");
console.log("link_ul", link_ul);

// Seleccionar todos los elementos con la clase 'destacado'
const link_items = document.getElementsByClassName("list_item");
// console.log(link_items)

// Seleccionar todos los elementos de tipo <p> en el documento
const parrafos = document.getElementsByTagName("p");
// console.log('parrafos', parrafos);
