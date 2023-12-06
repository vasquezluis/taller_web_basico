// ******* FUNCIONES CON PARAMETROS *******

// * Parámetros: Variables utilizadas en la definición de la función.
// * Argumentos: Valores reales proporcionados al llamar la función.

// -> Función con parámetros
function sumar(a, b) {
  return a + b;
}
const resultado = sumar(5, 3);
console.log("El resultado es: ", resultado);

// -> parametros predefinidos
function ImprimirCartaVideojuegos(
  nombre,
  juego = "Fornite",
  horasJugadas,
  juegoFinalizado = false
) {
  if (!nombre || !horasJugadas) return "Por favor rellena todos los campos ❌";

  return `
    Esta es una carta de videojuegos   

    Nombre: ${nombre}
    Su juego favorito es: ${juego}
    Ha jugado ${horasJugadas} horas
    
    ${juegoFinalizado ? "Ha finalizado el juego" : "No ha finalizado el juego"}
  `;
}

const resultadoVideoJuego = ImprimirCartaVideojuegos(
  "Luis Vasquez",
  "Hollow Knight",
  40,
  false
);
const resultadoVideoJuego2 = ImprimirCartaVideojuegos("Luis Vasquez", 40);
console.log(resultadoVideoJuego);
console.log(resultadoVideoJuego2);
