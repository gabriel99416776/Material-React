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
  return (
    <div className="App">
      <h1>Exercício State</h1>
      <button onClick={clicarParaSeguir}> {seguindo} </button>
    </div>
  );
}

export default App;
