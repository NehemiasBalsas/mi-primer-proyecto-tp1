"use client";
import { useState } from "react";

function Counter() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button className="border" onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Counter;
