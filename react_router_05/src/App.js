import { Route, Routes, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

export function App(){
    return(
         <div>
           <div>
            <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
            <Link to="users/:usernamee">Github user</Link>
             </div>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/:name" element={<Welcome/>}/>
            <Route path="/counter" element={<Counter/>} />
            <Route path="users/:username" element={<ShowGithubUser />} />

            <Route path="*" element={<div><p>Not Found</p></div>}/>
        </Routes>
        </div>
    )
}