//Modify the Container component so that it can display a title received within the title prop.

import React from "react";
import "./index.css"

export class Container extends React.Component{
    render(){
        return(
            <div className="container bg-white border-solid border-2 border-red-700">
                <div className="container-title"> {this.props.title}</div>
                <div className="container-content">{this.props.children}</div>
            </div>
        )
    }
}
