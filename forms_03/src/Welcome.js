import React from "react";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome, {this.props.name}! you are {this.props.age} old!</h1>
                
            </div>
        ) 
    }
}
Welcome.defaultProps = {
    name: "Pippo",
    age: 18
} 