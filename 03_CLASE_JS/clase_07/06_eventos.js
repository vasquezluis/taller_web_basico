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

const miElemento = document.getElementById("eventos_js");

function cambiarClase() {
  const claseActual = miElemento.className;

  if (claseActual === "div_fondo_rosa") {
    miElemento.className = "div_fondo_naranja";
  } else {
    miElemento.className = "div_fondo_rosa";
  }
}

function quitarClases() {
  miElemento.className = "div_fondo_azul";
}

miElemento.addEventListener("click", cambiarClase);
miElemento.addEventListener("dblclick", quitarClases);
