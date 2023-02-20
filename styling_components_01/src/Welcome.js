// Create an index.css file and import it within the index.js file. Add a .welcome class to the Welcome component that changes its background color and adds a border.

import React from "react";

export class Welcome extends React.Component{
    render(){
        return (
            <div className="welcome">
                <h1>Welcome, {this.props.name}! you are {this.props.age} old!</h1>
                
            </div>
        ) 
    }
}
Welcome.defaultProps = {
    name: "Pippo",
    age: 18
} 