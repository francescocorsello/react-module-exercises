// Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.

import React from "react"

export class UncontrolledLogin extends React.Component{
    
    handleFormSubmit = (event) => {

        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        return (
            <div>
                <h3> My Uncontrolled Form</h3>

                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username" autoFocus/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}