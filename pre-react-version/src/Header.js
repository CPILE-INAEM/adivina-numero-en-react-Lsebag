import React from "react";
import "./Header.css";

// function Header() {
//   return (
//     <div>
//       <h1 className="Header">Soy un header</h1>
//     </div>
//   );
// }

export default function Header(props) {
  console.log(
    `Las propiedades del componente Header son: ${JSON.stringify(props)}`
  );
  return <h1 className="titulo">{props.titulo}</h1>;
}
