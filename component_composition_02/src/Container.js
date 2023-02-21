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