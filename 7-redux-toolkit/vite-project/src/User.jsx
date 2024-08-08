import React from 'react'

function User({ user }) {
    console.log(user)
    return (
        <div>{user.name}</div>
    )
}

export default User