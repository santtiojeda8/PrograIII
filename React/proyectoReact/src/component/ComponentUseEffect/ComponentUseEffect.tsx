import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {
    const [state,setState] = useState(false)

    useEffect( () => {
        console.log('Componente Montado')
        return () => {
            console.log('Componente Desmontado')
        }
    },[])

    useEffect( () => {
        console.log(state)
    },[state])

    return (
        <div>
            <p>{state ? 'Es True' : 'Es False'}</p>
            <button onClick={ () => {setState(!state)} }>
                Cambiar Estado
            </button>
        </div>
    )
}
