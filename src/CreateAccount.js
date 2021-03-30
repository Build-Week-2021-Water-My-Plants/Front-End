import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CreateAccountForm from './CreateAccountForm';
import '../src/styling/index.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from './createAccountFormSchema';

const initialFormValues = {
  username: '',
  password: '',
  phone: '',
  id: ''
};

const initialFormErrors = {
  username: '',
  password: '',
  phone: ''
};

const initialAccounts = [];

const initialDisabled = true;

export default function App() {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();

  const routeToLogin = () => {
      history.push('/Login');
  }

  // this useEffect logs the 'accounts' array state everytime it is updated
  useEffect(() => {
    console.log(accounts, "This array constains information regarding all created accounts; try creating an account and it will be added here automatically");
  }, [accounts]);

  // using the inputs provided by the user, this function posts a new account object to the API
  // the new account object is then added to the 'accounts' array state, which keeps track of all created accounts
  const postNewAccount = (newAccount) => {
    axios
      .post("https://reqres.in/api/accounts", newAccount)
      .then((res) => {
        console.log(res.data, "This log displays the account object being posted to the API");
        setAccounts([res.data, ...accounts]);
        window.alert("---Account creation successful!---");
      })
      .catch((err) => {
        console.log(err);
        window.alert("---Account creation was unsuccessful---");
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const formSubmit = () => {
    const newAccount = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      phone: formValues.phone.trim(),
      // generating a random number to serve as the account object's unique id
      id: Math.random()
    };
    postNewAccount(newAccount);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='form container' style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', alignItems: 'center'}}>
      <h3>Please create an account</h3>
      <CreateAccountForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      <div onClick={routeToLogin} id='login-button' style={{border: '4px double white', padding: '1%', width: '107px', margin: '10px 0px'}}>Go to Login</div>
    </div>
  );
};
