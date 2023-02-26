import { useEffect, useState } from "react"
import { GithubUserList } from "./GithubUserList";

export function GithubUser(){
    
    const [names, setNames] = useState([]);
    const [data, setData] = useState("");
    const [git, setGit] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${data}`)
            .then(response =>{
                return response.json()
            })
            .then(json => {
                console.log(json)    

                setGit(json)
            })
   
    }, [data])

    return <div>
        <form>
            <h1>Git Hub Users List:</h1>
            <input name="username" onChange={ (e) => setData(e.target.value)} />
            <button type="button" onClick={() => setNames([...names, data])}>Add</button>
        </form>

        <GithubUserList list={names.join(', ')}/>

        {git && <h1>{git.name}</h1>}
        {git && <h3>{git.bio}</h3>}
    </div>
}