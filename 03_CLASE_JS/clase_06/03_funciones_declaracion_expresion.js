// ******* FUNCIONES DELCARACION EXPRESION *******

// * Declaración de Funciones: Se define antes de la ejecución del código.
// * Expresión de Funciones: Se define durante la ejecución del código.

// Declaración de función
// espera 2 valores para se multiplcados
function multiplicar(a, b) {
  return a * b;
}

// Expresión de función
// espera dos valores para ser divididos
const dividir = function (a, b) {
  return a / b;
};

console.log(multiplicar(4, 2)); // 8
console.log(dividir(10, 2)); // 5
