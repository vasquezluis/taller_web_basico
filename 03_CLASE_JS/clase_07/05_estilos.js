/**
 * En este ejemplo se cambian los estilos de un elemento
 * -> aside con id asideUnico
 */

// Seleccionar un elemento por su ID
const miElemento = document.getElementById("asideUnico");

// Cambiar el color de fondo del elemento
miElemento.style.backgroundColor = "blue";

// Cambiar el color de texto del elemento
miElemento.style.color = "white";

// Cambiar el tamaño de la fuente del elemento
miElemento.style.fontSize = "18px";

// Cambiar el tamaño del elemento
miElemento.style.width = "50%";

// cambiar el redondeado de las esquinas
miElemento.style.borderRadius = "15px";

// cambiar el padding
miElemento.style.padding = "20px";

/**
 * Agregar o quitar clases de un elemento
 * -> aside con id asideUnico
 */

// Seleccionar un elemento por su ID
const miElemento2 = document.getElementById("seccion_nueva");

// Agregar una clase al elemento
miElemento2.classList.add("divVerde");

// Quitar una clase del elemento
miElemento2.classList.remove("divSkyblue");

// Seleccionar un elemento por su ID
const miElemento3 = document.getElementById("toggle_div");

// Alternar la presencia de una clase en el elemento (agrega si no está presente, quita si está presente)
miElemento3.classList.toggle("toggle_div_class");
