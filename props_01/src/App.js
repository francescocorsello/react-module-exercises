import React from "react"
import { HelloWorld } from "./HelloWorld"
import { Message } from "./Message"
import { Welcome } from "./Welcome"


export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name="Joe" />
            </div>
            
        ) 
    }
}