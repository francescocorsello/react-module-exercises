import React, { useState } from "react";

export function Counter({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
            setCounter(currentValue => currentValue + 1)
    }
    return(
        <div><br></br>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
        )
}