// Importamos el manejador de estados de reactjs
import { useState } from "react";

// creamos una funcion que devuelve tsx -> HTML combinado con JavaScript
export function Contador() {
  // creamos un estado con valor inicial 0
  // el primer elemento es el estado y el segundo es la funcion que controla el estado
  const [counter, setCounter] = useState(0);

  // retornamos html + javascript 👉 usar parentesis en el return
  return (
    <div className="border border-gray-600 bg-gray-800 p-2 rounded-md mb-2 flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl font-bold">Contador</h2>

      <div className="mt-2">
        {/* con el evento onClick usamos la funcion del estado para poder actualizarlo */}
        <button
          className="border border-gray-600 px-4 py-2 text-xl mx-2"
          onClick={() => setCounter((counter) => counter - 1)}
        >
          -
        </button>

        {/* imprimimos el valor actual del estado */}
        <span className="text-white text-xl">{counter}</span>

        {/* con el evento onClick usamos la funcion del estado para poder actualizarlo */}
        <button
          className="border border-gray-600 px-4 py-2 text-xl mx-2"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
