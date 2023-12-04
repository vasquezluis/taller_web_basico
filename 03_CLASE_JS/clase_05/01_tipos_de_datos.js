// * Tipos de datos

// ******* TIPOS PRIMITIVOS ******* \\

// * 1. undefined -> representa una variable que no ha sido declarada o a la cual no se le ha asignado un valor
// * 2. Boolean ->  representa un valor lógico y puede tener dos valores, ya sean true o false.
// * 3. Number -> permite representar y manipular valores numéricos como «37» o «-9.25».
// * 4. String -> representa datos textuales (cadenas de caracteres).
// * 5. BigInt -> representa valores numéricos que son demasiado grandes para ser representados por el tipo de dato number.
// * 6. Symbol -> es un valor primitivo único e inmutable.

// undefined
const undef = undefined;
console.log(undef);

// booleano
const isFinished = true;
console.log(isFinished);

// number
const day = 4;
const month = 12;
const year = 2023;
console.log(day, month, year);

// string
const saludo =
  "Hola, este es un saludo desde el taller de programación web básico";
console.log(saludo);

// bigInt
const numeroNormal = 9007199254740991;
const numeroGrande = BigInt("9007199254740991000000");
console.log(numeroNormal);
console.log(numeroGrande);

// Símbolos
const simbolo1 = Symbol("descripcion");
const simbolo2 = Symbol("descripcion");
// Comprobación de igualdad
console.log(simbolo1 === simbolo2);
// Uso de símbolos como propiedades de objetos
const persona = {
  nombre: "Juan",
  [simbolo1]: "Información privada",
};
console.log(persona[simbolo1]);

// ******* MAS TIPOS DE DATOS ******* \\

// * 1. Null -> representa la ausencia intencional de cualquier valor, un valor nulo o «vacío».
// * 2. Object -> representa una colección de datos definidos y entidades más complejas.
// * 3. Function -> es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor Object. Son objetos con la capacidad de ser ejecutables.

// null
let valorNulo = null;
console.log(valorNulo);

// object
const persona2 = {
  nombre: "Maria",
  edad: 30,
  casada: true,
};
console.log(persona2);

// array
const animales = ['perro', 'gato', 'pajaro', 'elefante', 'tigre', 'loro']
console.log(animales[0])

// function
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}
saludar("Juan");



// ******* CONSOLE.LOG() ******* \\
console.log('Hola mundo')
console.log(typeof day)

// ! definiciones obtenidas de 
// https://blog.hubspot.es/website/tipos-de-datos-javascript
// ! ejemplos creados por el tallerista