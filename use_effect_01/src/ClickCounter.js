// Add a side effect to the ClickCounter component from useState 01 that calls 
// a onCounterChange function with the current value of the counter every time 
// value of the counter changes. The function should be received as a prop.

import React, { useState } from "react";

export function ClickCounter({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
            setCounter(currentValue => currentValue + 1)
    }

    function onCounterChange(){
        
            console.log(`The counter is now ${counter}`)                    
    }
    
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={(event) => [handleCounterIncrement(), onCounterChange()]}>Increment</button>
        </div>
        )
}

