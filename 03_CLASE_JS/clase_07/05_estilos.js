/**
 * En este ejemplo se cambian los estilos de un elemento
 * -> aside con id asideUnico
 */

const miElemento = document.getElementById("asideUnico");
miElemento.style.backgroundColor = "blue";
miElemento.style.color = "white";
miElemento.style.fontSize = "18px";
miElemento.style.width = "50%";
miElemento.style.borderRadius = "15px";
miElemento.style.padding = "20px";

/**
 * Agregar o quitar clases de un elemento
 * -> aside con id asideUnico
 */

const miElemento2 = document.getElementById("seccion_nueva");
miElemento2.classList.add("divVerde");
miElemento2.classList.remove("divSkyblue");
const miElemento3 = document.getElementById("toggle_div");
miElemento3.classList.toggle("toggle_div_class");
