// Modify the TodoList component so that, instead of rendering the items array within the ul tag, 
// it calls the function passed to its render prop, passing it the items array as a parameter, 
// as well as the function required to delete the item. 
// Pass a render prop to the TodoList component to correctly render and interact with the items array.

import React from "react";

export class ToDoList extends React.Component {

    state = {
        task:"",
        arr:[]
    }

    addToDo = () => {
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
                <button onClick = {this.addToDo}>Add</button>
                <button onClick = {() => this.setState({arr:[]})}>Reset</button>
                <ul>
                    {this.props.render(this.state.arr)}
                </ul>
            </div>
        )
    }
}