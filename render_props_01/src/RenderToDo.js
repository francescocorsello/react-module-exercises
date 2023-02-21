import React from "react";
import { ToDoList } from "./ToDoList";

export class RenderToDo extends React.Component{
    render(){
        return(
            <ToDoList render = { (arr, removeToDo) => {

                    const [...x] = arr;
                    removeToDo = (index) => {
                        this.setState({
                            [arr] : [arr.splice(index, 1)]
                        })
                    }
                    return (
                        x.map((x,index) => <li key={x + index}>{x} <button onClick={() => removeToDo(index)}>Remove</button></li>)
                        )
                }
            }/>
            
        )
    }
}