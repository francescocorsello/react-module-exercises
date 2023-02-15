// Create a ClickTracker component that renders three buttons. 
// Implement a single event handler for all three buttons, and track of which button was pressed last. 
// Show the last button that was pressed in an h1 tag within the ClickTracker component. 
// Tip: you can use the event object to access the target property of the event.

import React from "react";

export class ClickTracker extends React.Component{

    state = {lastButton: ""}

    handleButtonClick = (event) => {
        console.log(
            event.target.name,
            event.button
        )
        const lastButtonPressed = event.target.name;
        this.setState({
            lastButton: lastButtonPressed
        }) 
    }
    render(){
        return(
            <div>

            <button name="Button 1" onClick={this.handleButtonClick}>
                Button 1
            </button>

            <button name="Button 2" onClick={this.handleButtonClick}>
                Button 2
            </button>

            <button name="Button 3" onClick={this.handleButtonClick}>
                Button 3
            </button>

            <h1>Last Button Pressed is: {this.state.lastButton} </h1>

            </div>
        )
    }

}


