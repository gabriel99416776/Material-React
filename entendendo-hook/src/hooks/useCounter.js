import { useState } from "react";

function getInitialValue(){
    console.log('Obtendo o valor inicial')
    return 1 + 1
}


export default function useCounter() {
    // () => é isso é uma função de inicialização preguiçosa, que só será executada na primeira renderização do componente. Isso é útil para evitar cálculos desnecessários em renderizações subsequentes, melhorando o desempenho do componente.
const [count, setCount] = useState(() => getInitialValue())

const increment = () => {
    // Usando a função de atualização para garantir que estamos usando o valor mais recente do estado
    setCount((count) => count + 1)
    setCount((count) => count + 1)
}
return { count, increment }
}