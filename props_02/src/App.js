// What happens if no `name` prop is passed to the `Welcome` component? Can you set a default value for the `name` prop?

// if no `name` prop is passed to the `Welcome` component no name will be rendered 
// if we set up a default prop and no `name` prop is passed to the `Welcome` component, that default name will br rendered

import React from "react"
import { HelloWorld } from "./HelloWorld"
import { Welcome } from "./Welcome"


export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome />
            </div>
            
        ) 
    }
}