// Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. 
// Is the constructor still required?

// The constructor in not required, also it's best practice
// to use componentDidMount for this kind of operation instead 

import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        count : this.props.start
    }
    
    componentDidMount(){

        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.amount
            })
        }, this.props.interval)
    }

    
    render(){
        return <div>
            <CounterDisplay count={this.state.count}/>
        </div>
    }
}