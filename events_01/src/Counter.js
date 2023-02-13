import React from "react";
import { ClickCounter } from "./ClickCounter";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        count : this.props.start
    }
    
    // componentDidMount(){
    // this._interval =  setInterval(() => {
    //         this.setState({
    //             count: this.state.count + this.props.amount
    //         })
    //     }, this.props.interval)
    // }

    // componentWillUnmount(){
    //     if (this._interval) {
    //         clearInterval(this._interval)
    //     } 
    // }

    // componentDidUpdate(){
    //     if (this.state.count > this.props.start * 10) {
    //         this.state.count = this.props.start
    //     }
    // }

    render(){
        return <div>
            <CounterDisplay count={this.state.count}/>
            <ClickCounter/>
        </div>
    }
}