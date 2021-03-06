//TECH IMPORTS
import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";
import { useHistory } from "react-router-dom";
//COMPONENT IMPORTS
import userLoginSchema from './userLoginSchema'
import LoginForm from './LoginForm'

// Form Initialization //
const initialFormValues = {
    username: '',
    password: '',
};


const initialFormErrors = {
    username: '',
    password: '',
};

const initialDisabled = true;


export default function Login (props) {

  const { uniqueId, setUniqueId } = props;

  const history = useHistory();

    // States //
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    // Helpers //
    const postUserInfo = (userInfo) => {
        axiosWithAuth()
          .post('https://plants-serv.herokuapp.com/api/auth/login', formValues)
          .then(res => {
              console.log("SUCCESSFULLY POSTED LOGIN INFO", res);
              localStorage.setItem("token", res.data.token);
              history.push(`/Profile/${uniqueId}`);
          })
          .catch(err => {
              console.log("FAILED TO POST LOGIN INFO", err);
          })
    }

    // Event Handlers //
    const inputChange = (name, value) => {
        yup
          .reach(userLoginSchema, name)
          .validate(value)
          .then(() => {
            setFormErrors({
              ...formErrors,
              [name]: "",
            });
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            });
          });
          setFormValues({
            ...formValues,
            [name]: value,
          });
      }



    const formSubmit = () => {
        const userCheck = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
        }
        postUserInfo(userCheck)
    }

    // Side Effects //
    useEffect(() => {
        userLoginSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
    })
    return (
        <div>
            <h2>Welcome to the Login Page!</h2>
            <LoginForm 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors} />
        </div>
        
    )
}