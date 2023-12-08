/**
 * Eventos en javascript
 * 
 * Los eventos son acciones que ocurren en los elementos HTML
 * cuando el usuario interactúa con ellos.
 * 
 * Los eventos pueden ser algo tan simple como el click de un botón
 * 
 * Los eventos se añaden a los elementos con addEventListener(), el tipo de evento y la función que se ejecutará cuando ocurra el evento 
 */

// 1. Seleccionar el elemento que queremos manipular
const miElemento = document.getElementById("eventos_js");

// 2. Crear una función que cambie la clase
function cambiarClase() {
  // 3. Obtener cual es su clase actual
  const claseActual = miElemento.className;

  if (claseActual === "div_fondo_rosa") {
    miElemento.className = "div_fondo_naranja";
  } else {
    miElemento.className = "div_fondo_rosa";
  }
}

// clase para quitar cualquier clase css y solo dejar la clase div_fondo_azul
function quitarClases() {
  miElemento.className = "div_fondo_azul";
}

// 4. Asignar el evento al elemento
miElemento.addEventListener("click", cambiarClase);

// agregar evento doble click
miElemento.addEventListener("dblclick", quitarClases);
