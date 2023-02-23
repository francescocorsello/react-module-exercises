import { useLogin } from "./useLogin"

export function Login () {
    const {onUsername, onPassword, onRemember, username, password, rememeber} = useLogin()

    return(
        <form>
            <input type="text" name="username" placeholder="insert your username" onChange={e=>onUsername(e)}/>
            <input type="password" name="password" placeholder="insert your password" onChange={e=>onPassword(e)}/>
            <input type="checkbox" name="remember" onChange={e=>onRemember(e)}/>
            {username && <h2>Username: {username}</h2>}
            {password && <h2>password: {password}</h2>}
            {rememeber && <h2>Checked: True</h2>}
        </form>
    )
}