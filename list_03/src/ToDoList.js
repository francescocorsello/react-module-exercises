// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. 
// The items state variable should be an array of strings. 
// The TodoList component should also contain an input tag and a button. 
// When the button is clicked, the event handler should add the value of the input tag to the items array.

import React from "react";

export class ToDoList extends React.Component {

    state = {
        task: ""
    }

    arr=[]
    element=[]
    handleEvent = () => {
        this.arr.push(this.state.task);
        this.element = this.arr.map(el => <li>{el}</li>)
        console.log(this.element)
    }
   
    render(){

        return(
            <div>
            <input placeholder="Insert task" onChange={e => this.setState({task:e.target.value})}/>
            <button type="button" onClick={this.handleEvent}>Add</button>
            <ul>{this.element}</ul>
        </div>
        )
    }
}