// What happens if the name variable is not passed to the function?

import React from 'react'
import ReactDOM from 'react-dom'

function printHello(name) {
    return <h1>Hello, {name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// we don't pass the argument to the function 
// so we don't print the name variable
root.render(printHello());