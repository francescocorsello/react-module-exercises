// Write a Sum function component that receives a numbers prop (expected to be an array of numbers) and renders the sum of all numbers in the array within a h1 tag.

export function Sum({arr}) {
    console.log(arr);  
    return(
        <h1>{arr.reduce((a, b) => a + b, 0)}</h1>
    )
}