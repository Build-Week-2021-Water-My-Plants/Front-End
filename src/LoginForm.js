import React from 'react';

export default function LoginForm () {

    return (
        <div>
            <h2>Enter Your Login Information:</h2>
            <label>
                Username:
                <input name='username' type='text' />
            </label>
            <label>
                Password:
                <input name='password' type='text' />
            </label>

        </div>
    )
}