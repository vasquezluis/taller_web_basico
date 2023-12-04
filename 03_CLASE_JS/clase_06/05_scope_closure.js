// ******* SCOPE Y CLOSURE *******

// * Scope: El alcance de una variable dentro y fuera de una función.
// * Closure: Función que tiene acceso a variables de otra función, incluso después de que la función externa ha terminado.

function exterior() {
  let mensaje = "Hola desde exterior";

  function interior() {
    console.log(mensaje);
  }

  return interior;
}

// exterior() tiene acceso a interior(), pero tambien lo tendria si
// interior fuera una funcion externa tambien
const funcionClosure = exterior();
funcionClosure();


// 👉 recursos para logica
// https://adventjs.dev