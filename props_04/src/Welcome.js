// What happens if the name prop is a JSX expression instead of a string? 
// How do you pass a prop that contains a JSX expression? 
// Modify the value passed to the name prop so that it's contained within a strong tag.

import React from "react";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                <p>Your age is {this.props.age}</p>
            </div>
        ) 
    }
}
Welcome.defaultProps = {
    name: "Pippo",
    age: 33
}