import useGenerator from "./hooks/useGenerator";
import "./App.css";
import { useState } from "react";

function App() {
  const [copiado, setCopiado] = useState(false);

  function copiarSenha() {
    navigator.clipboard.writeText(senha.senha);
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  }
  const senha = useGenerator();
  return (
    <>
      <section id="center">
        <div>
          <h1>Gerador de Senhas</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button type="button" className="counter" onClick={senha.gerarSenha}>
            Gerar Senha
          </button>
          <button type="button" className="counter" onClick={copiarSenha} disabled={!senha.senha}
          style={{
            backgroundColor : copiado ? '#283f28' : "",
          }}
          >
            {copiado ? "Copiado!" : "Copiar Senha"}
            
          </button>
        </div>
        <p>{senha.senha}</p>
      </section>
    </>
  );
}

export default App;
