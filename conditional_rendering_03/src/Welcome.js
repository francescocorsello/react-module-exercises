// Modify the Welcome component so that the Age component is rendered 
// only if the age prop is greater than 18 and less than 65.

import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                {this.props.age & this.props.age < 65  
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