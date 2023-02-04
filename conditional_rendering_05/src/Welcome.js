import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                {this.props.age > 18 & this.props.age < 65 & this.props.name === "John" 
                ? <p> <Age age={this.props.age}/></p>
                : <p><Age/></p>
                }
            </div>
        ) 
    }
}
Welcome.defaultProps = {
    name: "Pippo",
    age: 18
} 