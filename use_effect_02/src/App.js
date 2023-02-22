import { Counter } from "./Counter"
import { useState } from "react"

export function App(){

    const [showCounter, setShowCounter] = useState(true)

    function handleToggleCounter(){
        setShowCounter(flipValue => !flipValue)
    }

    return(
        <div>
            <button onClick={handleToggleCounter}>Toggle Counter</button>
            {showCounter && <Counter/>}
        </div>
    )
}