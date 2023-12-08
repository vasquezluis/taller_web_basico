/**
 * Creación y eliminación de elementos
 * 
 * Para crear un nuevo elemento usamos el método document.createElement()
 * con appendChild() podemos añadir un elemento al final de otro elemento
 * 
 * Para eliminar un elemento usamos el método removeChild()
 *
 */

// añadir elementos al final de un elemento
const miListaDesordernada = document.getElementById("links");
const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Link creado con JS";
miListaDesordernada.appendChild(nuevoLi);

// Crear un nuevo elemento <div>
const nuevoDiv = document.createElement("div");
// Añadir texto al nuevo elemento
nuevoDiv.textContent = "¡Hola, soy un nuevo div!";
// Añadir el nuevo elemento al final del cuerpo del documento
document.body.appendChild(nuevoDiv);

// Eliminar un elemento existente por su ID
const elementoAEliminar = document.getElementById("header");
elementoAEliminar.parentNode.removeChild(elementoAEliminar);
