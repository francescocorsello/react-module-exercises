import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";

export class MyComponent extends React.Component{
    render(){
        return(
            <Container>
                <Welcome name="Joe" age="35"/>
                <p>Life is good!</p>
            </Container> 
        )
    }
}