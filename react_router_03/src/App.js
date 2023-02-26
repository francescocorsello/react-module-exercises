import { Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

export function App(){
    return(
         <div>
         
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/:name" element={<Welcome/>}/>
            <Route path="/counter" element={<Counter/>} />
            <Route path="users/:username" element={<ShowGithubUser />} />
        </Routes>
        </div>
    )
}