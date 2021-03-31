import React from 'react';
import { useHistory } from 'react-router-dom'

export default function LoginForm (props) {
    // Destructuring Props //
    const { values, submit, change, disabled, errors } = props;

    // onSubmit & onChange //
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { value, name } = evt.target;
        change( name, value )
      }
    
    // Route to Profile if we need it//
    const history = useHistory()

    const routeToProfile = () => {
        history.push('/Profile')
    }



    return (
        <div>
            <h2>Enter Your Login Information:</h2>
            <form onSubmit={onSubmit}>
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
                <button onClick={onSubmit} disabled={disabled}>Login</button>
                <div style={{ color: 'red'}}>
                    <div>
                        {errors.name}
                    </div>
                </div>
            </form>

        </div>
    )
}