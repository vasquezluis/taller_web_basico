// ******* Control de flujo ******* \\

// * IF ELSE

const edad = 20;
const edad2 = "18";
if (edad >= edad2) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/**
 * Operadores de Comparación:
    == igual a
    === igual a (considerando tipo de dato)
    != no igual a
    !== no igual a (considerando tipo de dato)
    > mayor que
    < menor que
    >= mayor o igual que
    <= menor o igual que
 */

// * BUCLES

for (let i = 0; i < 5; i++) {
  console.log("Iteración " + i);
}

const tabla = 5;
for (let i = 1; i < 10 + 1; i++) {
  let resultado = i * tabla;
  console.log(resultado);
}

const numeroBuscado = 7;
for (let i = 0; i < 10; i++) {
  if (i === numeroBuscado) {
    console.log("Numero encontrado en la posicion: ", i);
  } else {
    console.log("Iteracion: ", i + 1);
  }
}

let contador = 0;
while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}
