import React from 'react';
import { useHistory } from 'react-router-dom'

export default function LoginForm (props) {
    // Destructuring Props //
    const { values, submit, change, disabled, errors } = props;
    console.log(errors)

    // onSubmit & onChange //
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { value, name } = evt.target;
        change( name, value )
      }
    



    return (
        <div>
            <h2>Enter Your Login Information:</h2>
            <form className='login-form' onSubmit={onSubmit}>
                <label>
                    Username:
                    <input 
                    name='username' type='text' 
                    value={values.username} 
                    onChange={onChange} />
                </label>
                <label>
                    Password:
                    <input 
                    name='password' type='text'
                    value={values.password}
                    onChange={onChange} />
                </label>
                <button onClick={onSubmit} disabled={disabled}>
                    Login
                </button>
                <div style={{ color: 'red'}}>
                    <div>
                        {errors.username}
                        <br></br>
                        {errors.password}
                    </div>
                </div>
            </form>

        </div>
    )
}