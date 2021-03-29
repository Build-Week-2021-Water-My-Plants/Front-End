import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CreateAccountForm from './CreateAccountForm';
import '../src/styling/index.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';

const initialFormValues = {
  username: '',
  password: '',
  phone: ''
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

  // this useEffect logs the 'orders' array state everytime it is updated
  useEffect(() => {
    console.log(accounts, "This array constains information regarding all created accounts; try creating an account!");
  }, [accounts]);

  // using the inputs provided by the user, this function posts a new pizza order object to the API specified in the README
  // the new pizza order object is then added to the 'orders' array state, which keeps track of all active pizza orders
  const postNewAccount = (newAccount) => {
    axios
      .post("https://reqres.in/api/accounts", newAccount)
      .then((res) => {
        console.log(res.data);
        setAccounts([res.data, ...accounts]);
      })
      .catch((err) => {
        console.log(err);
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
      phone: formValues.phone.trim()
    };
    postNewAccount(newAccount);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='form container'>
      <CreateAccountForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
    </div>
  );
};
