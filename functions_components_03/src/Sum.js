// What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop?

export function Sum({arr}) {
    console.log(arr);  
    return(
        <h1>{arr.reduce((a, b) => a + b, 0)}</h1>
    )
}
Sum.defaultProps = {
    arr: [0, 1, 1, 2, 3, 5, 8,] // 20
}