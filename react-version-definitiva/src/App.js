import "./App.css";
import { useState, useRef, useEffect } from "react";
import MostrarMensaje from "./MostrarMensaje";

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
//let number = "";
function App() {
  //useState devuelve un array
  //El primer valor de este array es la variable score. Y la segunda es la función para modificarla
  //Entonces score es la variable y setScore es cómo la modificaremos
  //
  //
  const [score, setScore] = useState(20);
  const [number, setNumber] = useState("");
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());
  const inputRef = useRef(null);

  const handleCheck = () => {
    //number = Number(inputRef.current.value);
    //Aquí a continuación definimos una función de callback a continuación de inputRef.current.value,
    //esto es porque primero quiero que termine de hacer lo suyo antes de pasar a la ejecución del resto del código
    //En este caso para los hooks de useState() y useReducer() no están permitidas las funciones de callback. Por ello
    //lo solucionaremos de manera diferente
    // setNumber(inputRef.current.value, () => {
    //   console.log(`El número secreto es ${secretNumber}`);
    //   console.log(`El número introducido es ${number}`);
    // });
    //
    //
    setNumber(Number(inputRef.current.value));
  };

  useEffect(() => {
    console.log(`El número secreto es ${secretNumber}`);
    console.log(`El número introducido es ${number}`);
    if (number === secretNumber) {
      //mensaje has ganado -HECHO
      //mostrar el numero secreto -HECHO
      //cambio de color de fondo
      //Si el score es mayor que el highscore, actualizar el highscore
    } else if (score === 1) {
      setScore(score - 1);
      //mensaje perdiste
      // cambio de color de fondo
    } else {
      //mensaje es mas abajo -HECHO
      //disminuir el score
      setScore(score - 1);
    }
  }, [number]); //Se detecta que el number ha cambiado y por eso vuelve a renderizar

  return (
    <div>
      {console.log("Renderizando App")};
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <MostrarMensaje number={number} secretNumber={secretNumber} />
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
      <script src="script.js"></script>
    </div>
  );
}

export default App;
