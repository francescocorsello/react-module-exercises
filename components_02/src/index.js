import React from "react"
import { HelloWorld } from "./HelloWorld"
import  ReactDOM  from "react-dom"

const helloWorldElement = <HelloWorld />
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(helloWorldElement);