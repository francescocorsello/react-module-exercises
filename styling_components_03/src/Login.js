// Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.

import React from "react";

export class Login extends React.Component{
    state = { 
        username: "",
        password: "",
        checked: false
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
        
        
        const passStyle = {
            backgroundColor: this.state.password.length < 8 ?'red' : 'green',
        }

        return (

            <div>  
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                <input style={passStyle} name="password" type="password" value={this.state.password} onChange={this.handleInputChange} ></input>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}></input>
                <div><br></br><button name="login" type="button" disabled={!(this.state.username && this.state.password)} onClick={ () => this.props.onLogin(this.state)}>Login</button></div>
            </div>
               
        )
    }
}