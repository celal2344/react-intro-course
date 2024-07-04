import React from 'react'

export const users = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' }
];

function Login() {
    return (
        <>
            <div>
                <input type="text" placeholder="Username" />
            </div>
            <div>
                <input type="password" placeholder="Password" />
            </div >
            <button>Login</button>
        </>
    )
}

export default Login