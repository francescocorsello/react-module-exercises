// Add a "reset" button to the Login component that clears the content of all three inputs when clicked

import React from "react";
import { Welcome } from "./Welcome";

export class Login extends React.Component{
    state = { 
        username: "",
        password: "",
        remember: false,
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

    handleResetState = () =>{

        this.setState ({ 
            username: "",
            password: "",
            remember: false,
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
                <div><br></br><button name="reset" type="button"  onClick={this.handleResetState}>Reset</button></div>
            </div>
        </div>
          
        )
    }
}