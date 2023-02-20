// Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the items array.

import React from "react";

export class ToDoList extends React.Component {

    state = {
        task:"",
        arr:[]
    }

    addToDo = () =>{
        this.state.arr.push(this.state.task);
        this.setState ({
            task:"",
            arr: this.state.arr
        })
    }

    removeToDo = (index) =>{
        this.state.arr.splice(index,1)
        this.setState({
            arr:this.state.arr
        })
    }

    render(){
        return(
            <div>
                <input name="task" placeholder="Insert here task" value={this.state.task} onChange={e=>this.setState({task:e.target.value})}/>
                <button onClick={this.addToDo}>Add</button>
                <button onClick={()=>this.setState({arr:[]})}>Reset</button>
                <ul>
                    {this.state.arr.map((el,index)=> <li key={index}>{el} <button onClick={() => this.removeToDo(index)}>Remove</button></li>)}
                </ul>
            </div>
        )
    }
}