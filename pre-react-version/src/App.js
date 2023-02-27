import "./App.css";
import Aviso from "./Aviso";
import Header from "./Header";
import Button from "./Button";
import Contador from "./Contador";

function App() {
  return (
    <div className="App">
      <Header titulo="Esta es la página principal" />
      <Contador />
      <Button />
      <Aviso />
    </div>
  );
}

export default App;
