import { useState } from "react";

export function Contador() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="border border-gray-600 bg-gray-800 p-2 rounded-md mb-2 flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl font-bold">Contador</h2>

      <div className="mt-2">
        <button
          className="border border-gray-600 px-4 py-2 text-xl mx-2"
          onClick={() => setCounter((counter) => counter - 1)}
        >
          -
        </button>

        <span className="text-white text-xl">{counter}</span>

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
