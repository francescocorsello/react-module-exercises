import React from "react";
import { CounterButton } from "./CounterButton";

export class ClickCounter extends React.Component{
    state = { count: 0}

   handleCounterState(){
        this.setState((state) =>{
            return {
                count: state.count + 1,
            }
        })
    }
    render(){
        return(
            <CounterButton function={this.handleCounterState()} count={this.state.count}/>
        )
    }

}