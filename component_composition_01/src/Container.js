// Create a Container component that renders its children within a div tag. 
// Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss.

import React from "react";
import "./index.css"

export class Container extends React.Component{
    render(){
        return(
            <div className="container bg-white border-solid border-2 border-red-700">
                {/* <div className="container-title">{this.props.title}</div> */}
                <div className="container-content">{this.props.children}</div>
            </div>
        )
    }
}
