/**
 * Manipulación de elementos
 * 
 * podemos acceder a los atributos de los elementos
 * y cambiarlos con setAttribute
 * 
 * podemos acceder al contenido de los elementos
 * y cambiarlos con textContent
 */

const parrafo1 = document.getElementById("parrafo1");
parrafo1.textContent =
  "Este es un texto creado desde javascript para el parrafo 1";

const miImagen = document.getElementById("imagen1");
miImagen.setAttribute("src", "./public/images/image2.png");
miImagen.setAttribute("alt", "Space image");
miImagen.setAttribute("title", "Space image");
miImagen.style.width = "50%";
miImagen.style.aspectRatio = "1/2";

const miAside = document.getElementById("asideUnico");
miAside.style.backgroundColor = "#ccc";
miAside.style.color = "black";
miAside.style.padding = "20px";
miAside.style.borderRadius = "15px";
miAside.innerHTML = "<strong>Nuevo contenido HTML</strong>";
