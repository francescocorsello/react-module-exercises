// Write a function that receives a `name` argument and returns a `h1` tag with the `name` variable appended to the `"Hello, "` string.

import React from 'react'
import ReactDOM from 'react-dom'

function printHello(name) {
    return <h1>Hello, {name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(printHello("Joe"));