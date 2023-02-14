import React from "react";
import { ClickCounter } from "./ClickCounter";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{

    
    render(){
        return <div>
            <ClickCounter/>
        </div>
    }
}