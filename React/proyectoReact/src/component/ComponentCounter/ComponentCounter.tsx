import { useState } from "react"


export const ComponentCounter = () => {
    const [counter,setCounter]  = useState <number> (0)

    const incrementarCounter = () => {
        setCounter ((prev) => prev+1)
    }

    const decrementarCounter = () => {
        if(counter > 0) {
            setCounter((prev) => prev-1)
        }
    }

    return (
        <div>
            <h2>Valor de counter: {counter}</h2>
            <button onClick={incrementarCounter}>Incrementar</button>
            <button onClick={decrementarCounter}>Decrementar</button>
        </div>
    )
}
