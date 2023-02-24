// Modify the useCounter custom hook from Custom Hooks 01 
// to use the useCallback to memoize the functions used to increment, decrement and reset the counter

import { useCallback, useState } from "react";

export function useCounter(initialValue = 0){

    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = useCallback(function handleCounterIncrement() {
        setCounter(currentValue => currentValue + 1)
    }, [])

    const handleDecrement = useCallback(function handleCounterDecrement() {
        setCounter(currentValue => currentValue - 1)
    }, [])
    
    const handleReset = useCallback(function handleCounterReset() {
        setCounter(initialValue)
    }, [initialValue])

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
}
