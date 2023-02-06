// Modify the Counter component so that the initial value of the counter, 
// the increment interval and the increment amount are passed as props to the component.

import React from "react";


export class Counter extends React.Component{
    state = {
        count : this.props.start
    }
    
    constructor(props){
        super(props)

        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.amount
            })
        }, this.props.interval)
    }
    
    render(){
        return <div>
            <h1>Count: {this.state.count}</h1>
        </div>
    }
}