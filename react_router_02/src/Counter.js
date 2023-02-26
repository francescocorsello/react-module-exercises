import React, { useState } from "react";

export function Counter({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
            setCounter(currentValue => currentValue + 1)
    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
        )
}