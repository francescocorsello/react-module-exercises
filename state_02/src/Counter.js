// When calling setState to increment the counter, should the parameter be a function or an object? Why?


// the parameter should be a function. 
// If our next value depends on the previous value you should use the callback mode to call setState(). 
// The callback is a function that recives the current state and return the portion of tha state we want to update in a reliable way

import React from "react";

export class Counter extends React.Component{
    state = {
        count : 0
    }
    
    constructor(props){
        super(props)

        setInterval(() => {
            this.setState({
                count: this.state.count +1
            })
        }, 1000)
    }

    
    render(){
        return <div>
            <h1>Count: {this.state.count}</h1>
        </div>
    }
}