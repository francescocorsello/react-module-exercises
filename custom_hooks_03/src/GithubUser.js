import { useEffect, useState } from "react"

function useGithubUser(username){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response =>{
                return response.json()
            })
            .then(json => {
                console.log(json)    

                setData(json)
            })
   
    }, [username])
    return {data}
}

export function GithubUser({username}){
    
    const {data} = useGithubUser(username)

    return <div>
        {data && <h1>{data.name}</h1>}
        {data && <h3>{data.bio}</h3>}
    </div>
}