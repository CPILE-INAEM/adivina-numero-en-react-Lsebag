import React from "react";
import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(5);

  //Aquí se hace con funciones fecha
  const aumentarContador = () => setCount(count + 1);

  const disminuirContador = () => setCount(count - 1);

  //Estos 2 bloques funcionan, son otra forma
  //   function aumentarContador() {
  //     setCount(count + 1);
  //     console.log(count);
  //   }

  //   function disminuirContador() {
  //     setCount(count - 1);
  //     console.log(count);
  //   }

  //Otra forma
  //   let count = 0;
  //   const aumentarContador = () => {
  //     count = count + 1;
  //     console.log(count);
  //   };

  //Otra manera de hacerlo
  //   export default function Contador() {
  //     let count = 0;
  //     function aumentarContador() {
  //       count = count + 1;
  //       console.log(count);
  //     }

  return (
    <div>
      <p>Contador</p>
      <button onClick={aumentarContador}>Incrementar</button>
      <button onClick={disminuirContador}>Disminuir</button>
      <p>Me has pulsado {count} veces</p>
    </div>
  );
}
