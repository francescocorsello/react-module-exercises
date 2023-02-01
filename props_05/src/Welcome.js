import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                <p> <Age /> {this.props.age}</p>
            </div>
        ) 
    }
}
Welcome.defaultProps = {
    name: "Pippo",
    age: 18
}