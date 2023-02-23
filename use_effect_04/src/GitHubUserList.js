// Create a GitHubUserList component that maintains an array of usernames, 
// showing a GithubUser component for each username entered. 
// The usernames should be added to the array using an input field and a button.


export function GitHubUserList({list}){

    return (
        <div>
           {list && <h1>{list}</h1>}
        </div>
        )

    
}   