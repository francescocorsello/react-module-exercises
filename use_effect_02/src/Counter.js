// Rewrite the Counter component from State 1 as a function component 
// and add a side effect that initializes the interval as soon as the component renders, 
// and clears it when the component unmounts.

import React, { useEffect, useState } from "react";

export function Counter({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log(`I have mounted`)

        return () => {
            console.log('I am about to be unmounted')
        }
    }, [])

    useEffect(() => {
        console.log(`The counter is now ${counter}`)
    }, [counter])

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