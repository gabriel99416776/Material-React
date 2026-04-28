import { useState } from "react";

function App() {
  const [seguindo, setSeguindo] = useState("seguir");
  function clicarParaSeguir() {
    if (seguindo === "Seguindo") {
      alert("Voce ja esta seguindo");
    } else {
      alert("Agora você está seguindo!");

      setSeguindo("Seguindo");
    }
  }


  const [clicou, setClicou] = useState("clicar");
  function clicar(){
    if (clicou === "clicou"){
      alert("Voce ja clicou");
    } else {
      alert("Agora você clicou!");
      setClicou("clicou");
    }
  }
  return (
    <div className="App">
      <h1>Exercício State</h1>
      <button onClick={clicarParaSeguir}> {seguindo} </button>

      <button onClick={clicar}> {clicou} </button>
    </div>
  );
}

export default App;
