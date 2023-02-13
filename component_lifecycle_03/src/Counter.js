// Reset the counter to the initial value received as a prop when the value is greater than ten times that initial value. 
// Do so in the componentDidUpdate lifecycle method.

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

    componentDidUpdate(){
        if (this.state.count > this.props.start * 10) {
            this.state.count = this.props.start
        }
    }

    render(){
        return <div>
            <CounterDisplay count={this.state.count}/>
        </div>
    }
}