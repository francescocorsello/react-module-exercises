import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter.js";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="users/:username">Github user</Link> |{" "}
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Alessandro" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
            
          <Route index element={<p>Add a user and select it</p>}/>
          <Route path=":username" element={<ShowGithubUser />}>
            <Route path=":username" element={<GithubUser />} />
          </Route>
        </Route>

        <Route path="*" element={<div><p>Not Found</p><Link to="/">Go Home</Link></div>}/>
      </Routes>
    </div>
  );
}