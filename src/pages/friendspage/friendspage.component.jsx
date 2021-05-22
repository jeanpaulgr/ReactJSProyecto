import React from 'react'

export default function friendspage() {
    return (
        <div>
        {!localStorage.getItem('loginUser') ? window.location =  '/signin' : null}
            <h1>FRIENDS PAGE</h1>
        </div>
    )
}
