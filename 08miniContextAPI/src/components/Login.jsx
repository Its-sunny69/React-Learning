import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default Login;