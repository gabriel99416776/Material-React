import { useState } from "react";

function getInitialValue(){
    console.log('Obtendo o valor inicial')
    return 1 + 1
}


export default function useCounter() {
    // () => é usado para passar uma função de inicialização para o useState, garantindo que a função seja executada apenas na inicialização do componente, e não em cada renderização subsequente.
const [count, setCount] = useState(() => getInitialValue())

const increment = () => {
    // Usando a função de atualização para garantir que estamos usando o valor mais recente do estado
    setCount((count) => count + 1)
    setCount((count) => count + 1)
}
return { count, increment }
}