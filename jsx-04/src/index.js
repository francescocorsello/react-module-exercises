// What happens if the `name` variable contains a JSX expression instead of a string?

import React from 'react'
import ReactDOM from 'react-dom'

const myName = <h2>Joe</h2>

function printHello(name) {
    return <h1>Hello, {name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(printHello(myName));