import React from "react";
import { ToDoList } from "./ToDoList";

export class RenderToDo extends React.Component{
    render(){
        return(
            <ToDoList render = { (arr) => {
                    return (
                        arr.map((el,index) => <li key={index}>{el} <button onClick={() => this.removeToDo(index)}>Remove</button></li>)
                        )
                }
            }/>
            
        )
    }
}