// Modify the TodoList by adding a "reset" button that clears the items array when clicked.

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

    resetArr = []
    handleResetState = () =>{
        this.element = []
        this.setState({
            task : ""
        })
    }

    render(){

        return(
            <div>
                <input placeholder="Insert task" value={this.state.task} onChange={e=>this.setState({task:e.target.value})}/>
                <button disabled={!this.state.task} onClick={this.handleEvent}>Add</button>
                <div><br></br><button name="reset" type="button"  onClick={this.handleResetState}>Reset</button></div>
                <ul>{this.element}</ul>
            </div>
        )
    }
}