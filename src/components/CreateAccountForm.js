import React from 'react';

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <h4>Account Details:</h4>

      <div className='form-group inputs' style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'baseline'}}>
        <label>
          Username:&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>

        <label>
          Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>
          Phone Num:&nbsp;
          <input
            value={values.phone}
            onChange={onChange}
            name='phone'
            type='tel'
          />
        </label>
      </div>
      
      <div className='form-group submit'>
        <br/>
        <button id='submitButton' disabled={disabled} style={{padding: '2%'}}>Create Account</button>

        <div className='errors'>
          <br/>
          <div id="usernameErrors" style={{WebkitTextStroke: '0.5px red', WebkitTextFillColor: 'black'}}>{errors.username}</div>
          <div id="passwordErrors" style={{WebkitTextStroke: '0.5px red', WebkitTextFillColor: 'black'}}>{errors.password}</div>
          <div id="phoneErrors" style={{WebkitTextStroke: '0.5px red', WebkitTextFillColor: 'black'}}>{errors.phone}</div>
        </div>
      </div>
    </form>
  );
};
