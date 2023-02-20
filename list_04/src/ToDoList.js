// Modify the TodoList component so that the input clears every time a Todo is added to the items array.

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
        this.setState({
            task : ""
        })
        
    }

    state = {
        task:""
    }    

    render(){

        return(
            <div>
                <input placeholder="Insert task" value={this.state.task} onChange={e=>this.setState({task:e.target.value})}/>
                <button disabled={!this.state.task} onClick={this.handleEvent}>Add</button>
                <ul>{this.element}</ul>
            </div>
        )
    }
}



