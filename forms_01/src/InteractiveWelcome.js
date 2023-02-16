// Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
// Pass the current content of the input tag to the name prop of the Welcome component. 
// The input tag should be a controlled component.

import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state = { username: ""}

    handleInputChange = (event) => {
       const value = event.target.value
       console.log(value)

       this.setState({
            username: value,
       })
    }

    render(){
        return (
            <div>
                <Welcome name={this.state.username}/>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
            </div>
        )
    }
}