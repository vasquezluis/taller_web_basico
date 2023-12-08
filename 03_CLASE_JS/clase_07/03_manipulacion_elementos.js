/**
 * Manipulación de elementos
 * 
 * podemos acceder a los atributos de los elementos
 * y cambiarlos con setAttribute
 * 
 * podemos acceder al contenido de los elementos
 * y cambiarlos con textContent
 */

// Seleccionar un elemento por su ID
const parrafo1 = document.getElementById("parrafo1");
// Cambiar el texto dentro del elemento
parrafo1.textContent =
  "Este es un texto creado desde javascript para el parrafo 1";

// Cambiar el valor de un atributo (en este caso, el atributo 'src' de una imagen)
const miImagen = document.getElementById("imagen1");
miImagen.setAttribute("src", "./public/images/image2.png");
miImagen.setAttribute("alt", "Space image");
miImagen.setAttribute("title", "Space image");
miImagen.style.width = "50%";
miImagen.style.aspectRatio = "1/2";

// Cambiar el contenido HTML completo del elemento
const miAside = document.getElementById("asideUnico");
// añadir estilos css a elemento
miAside.style.backgroundColor = "#ccc";
miAside.style.color = "black";
miAside.style.padding = "20px";
miAside.style.borderRadius = "15px";
// añadir contenido html
miAside.innerHTML = "<strong>Nuevo contenido HTML</strong>";
