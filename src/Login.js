import React, { useState } from 'react';
import LoginForm from './LoginForm'
import * as yup from 'yup'
import userLoginSchema from './userLoginSchema'
import passLoginSchema from './passLoginSchema'

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
    const [usernameErrors, setUsernameErrors] = useState(initialUsernameErrors);
    const [passwordErrors, setPasswordErrors] = useState(initialPasswordErrors);

    // Helpers //

    // Event Handlers //
    const userInputChange = (name, value) => {
        yup
          .reach(userLoginSchema, name)
          .validate(value)
          .then(() => {
              setUsernameErrors({
                  ...usernameErrors, [name]: ""
              });
          })
          .catch(err => {
              setUsernameErrors({
                  ...usernameErrors, [name]: err.errors[0]
              });
          })
          setUsername({
              ...username, [name]: value,
          });
    }

    const passInputChange = (name, value) => {
        yup
          .reach(passLoginSchema, name)
          .validate(value)
          .then(() => {
              setPasswordErrors({
                  ...passwordErrors, [name]: ""
              });
          })
          .catch(err => {
              setPasswordErrors({
                  ...passwordErrors, [name]: err.errors[0]
              });
          })
          setPassword({
              ...password, [name]: value,
          });
    }

    return (
        <div>
            <h2>Welcome to the Login Page!</h2>
            <LoginForm />
        </div>
        
    )
}