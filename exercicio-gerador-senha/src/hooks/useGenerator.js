import { useState } from "react";


function useGenerator() {
  const [senha, setSenha] = useState("");

  function gerarSenha() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let novaSenha = "";

    for (let i = 0; i < 12; i++) {
      novaSenha += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }

    setSenha(novaSenha);
  }

  return { senha, gerarSenha };
}

export default useGenerator;