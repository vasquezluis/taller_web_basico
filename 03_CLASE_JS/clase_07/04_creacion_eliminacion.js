/**
 * Creación y eliminación de elementos
 * 
 * Para crear un nuevo elemento usamos el método document.createElement()
 * con appendChild() podemos añadir un elemento al final de otro elemento
 * 
 * Para eliminar un elemento usamos el método removeChild()
 *
 */

const miListaDesordernada = document.getElementById("links");
const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Link creado con JS";
miListaDesordernada.appendChild(nuevoLi);

const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "¡Hola, soy un nuevo div!";
document.body.appendChild(nuevoDiv);

const elementoAEliminar = document.getElementById("header");
elementoAEliminar.parentNode.removeChild(elementoAEliminar);
