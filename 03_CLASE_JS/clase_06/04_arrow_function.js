// ******* ARROW FUNCTION *******

// * Funciones Anónimas: No tienen nombre y se definen directamente en el lugar donde se necesitan.
// * Arrow Functions: Sintaxis más corta y clara para definir funciones.

const saludarAnonimo = function (nombre) {
  console.log("¡Hola, " + nombre + "!");
};

// -> Arrow Function
const sumarArrow = (a, b) => a + b;
saludarAnonimo("María");
console.log(sumarArrow(3, 7));

// -> Ejemplo
const revisarAcceso = (nombre, apellido, edad) => {
  if (!nombre || !apellido || !edad) {
    return "Fallo en la operación";
  } else {
    if (edad < 18) {
      return "Eres menor de edad, no tienen acceso";
    }

    // * usamos template string -> string donde podemos agregar variables/constantes
    return `Bienvenido ${nombre} ${apellido} 👋, tu edad 👉 ${edad} cumple con los requerimientos`;
  }
};
console.log(revisarAcceso("Luis", "Vasquez", 24));
