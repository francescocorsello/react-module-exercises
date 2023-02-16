// Create a Login component containing three inputs: a username input, a password input and a remember checkbox. 
// All three inputs should be controlled components.


import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state = { 
        username: "",
        password: "",
            }

    handleInputUsername = (event) => {
       const value = event.target.value
       console.log(value)

       this.setState({
            username: value
       })
    }

    handleInputPassword = (event) => {
        const value = event.target.value
        console.log(value)
 
        this.setState({
             password: value
        })
     }

    render(){
        return (
            <div>
                <Welcome name={this.state.username}/>
                <input name="username" value={this.state.username} onChange={this.handleInputUsername}></input>
                <input name="password" value={this.state.password} onChange={this.handleInputPassword}></input>
            </div>
        )
    }
}