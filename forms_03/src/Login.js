// Add a "login" button to the Login component. 
// This button should be disabled as long as the username and password inputs are empty. 
// When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.

import React from "react";
import { Welcome } from "./Welcome";

export class Login extends React.Component{
    state = { 
        username: "",
        password: "",
        checked: "false"
            }

    handleInputChange = (event) => {
       const name = event.target.name
       const value = event.target.value
       const checked = event.target.checked
       
       
       console.log(name)
       console.log(value)

       this.setState({
            [name]: event.target.type === "checkbox" ? checked: value,
       })
    }

    render(){
        return (
        <div>   

            <div>
                <Welcome name={this.state.username}/>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}></input>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}></input>
                <div><br></br><button name="login" type="button" disabled={!(this.state.username && this.state.password)} onClick={ () => this.props.onLogin(this.state)}>Login</button></div>
            </div>
        </div>
          
        )
    }
}

