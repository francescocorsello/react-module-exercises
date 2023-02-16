import React from "react";
import { Welcome } from "./Welcome";

export class Login extends React.Component{
    state = { 
        username: "",
        password: "",
        remember: "false"
            }

    handleInputChange = (event) => {
       const value = event.target.value
       const name = event.target.name
       console.log(name)
       console.log(value)

       this.setState({
            [name]: value
       })
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        console.log(checked)

        this.setState({
            [name]: checked
       })
     }

    render(){
        return (
            <div>
                <Welcome name={this.state.username}/>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}></input>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleCheckboxChange}></input>
            </div>
        )
    }
}