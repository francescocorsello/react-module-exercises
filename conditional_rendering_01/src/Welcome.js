// Modify the Welcome component so that the Age component 
// is rendered only if the age prop is greater than 18.

import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                {this.props.age > 18
                ? <p> <Age /> {this.props.age}</p>
                : <p></p>
                }
            </div>
        ) 
    }
}
Welcome.defaultProps = {
    name: "Pippo",
    age: 18
} 