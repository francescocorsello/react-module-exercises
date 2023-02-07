// Modify the Counter component so that the interval is cleared whenever the component is unmounted. 
// What lifecycle method should you use?

import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        count : this.props.start
    }
    
    componentDidMount(){

    this._interval =  setInterval(() => {
            this.setState({
                count: this.state.count + this.props.amount
            })
        }, this.props.interval)
    }

    componentWillUnmount(){
        if (this._interval) {
            clearInterval(this._interval)
        } 
    }

    
    render(){
        return <div>
            <CounterDisplay count={this.state.count}/>
        </div>
    }
}