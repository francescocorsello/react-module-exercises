import { Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";

export function App(){
    return(
         <div>
         
        <Routes>
            <Route path="/" element={<Counter/>} />
        </Routes>
        </div>
    )
}