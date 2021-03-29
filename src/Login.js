import React, { useState } from 'react';
import LoginForm from './LoginForm'

// Form Initialization //
const initialUsernameValue = {
    username: '',
};

const initialPasswordValue = {
    password: '',
};

const initialUsernameErrors = {
    username: '',
};

const initialPasswordErrors = {
    password: '',
};

const initialDisabled = true;

export default function Login (props) {

    // States //
    const [username, setUsername] = useState(initialUsernameValue);
    const [password, setPassword] = useState(initialPasswordValue);
    const [usernameErrors, setUserNameErrors] = useState(initialUsernameErrors);
    const [passwordErrors, setPasswordErrors] = useState(initialPasswordErrors);

    // Helpers //

    return (
        <div>
            <h2>Welcome to the Login Page!</h2>
            <LoginForm />
        </div>
        
    )
}