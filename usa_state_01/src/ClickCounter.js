// Rewrite the ClickCounter component from Events 01 as a function component, 
// and use the useState hook to track the state of the counter.

import React, { useState } from "react";

export function ClickCounter({initialValue = 0}){

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