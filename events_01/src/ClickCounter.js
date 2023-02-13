// Create a ClickCounter class component that increments a counter every time a user clicks on a button.
// Render both the current value of the counter and the button within the ClickCounter component.

import React from "react";

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
            <button onClick={this.handleCounterState.bind(this)}>
                Counter: {this.state.count}
            </button>
        )
    }

}