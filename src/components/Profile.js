//TECH IMPORTS 
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
//COMPONENT IMPORTS
import axiosWithAuth from "./axiosWithAuth";
//STYLING IMPORTS 
import "../styling/index.css";

// this is just dummy information to ensure that the UI is displaying correctly; once data is actually being retrieved from the API, then this can be changed to an empty object
const initialAccount = { username: 'JohnDoe123', phone: '3051234567', id: 0.1111111111111111 };

export default function Profile() {

  //SLICES OF STATE / HOOKS 

  const params=useParams();

  const [ account, setAccount ] = useState(initialAccount);

  const [updateProfileFormValues, setUpdateProfileFormValues]=useState({
    username: "",
    password: "",
    phone: "",
  })

  //GETS ACCOUNT TO BE UPDATED UPON COMPONENT MOUNTING 
  useEffect(() => {
    axiosWithAuth()
    .get(`https://plants-serv.herokuapp.com/api/users/${params.id}`)
    .then((res)=>{
      console.log("SUCCEEDED GETTING ACCOUNT TO UPDATE", res);
      setAccount(res.data);
      setUpdateProfileFormValues(res.data)
    })
    .catch((err)=>{
      console.log("FAILED TO GET ACCOUNT TO UPDATE", err);
    })
  }, []);

  //HANDLES CHANGES TO UPDATE PROFILE FORM

  const handleUpdateProfileChange = (event) => {
    const { name, value, type, checked }=event.target;

    const valueToUse = type === "checkbox" ? checked : value;

    setUpdateProfileFormValues({
      ...updateProfileFormValues, [name]: valueToUse
    })
  }

  //HANDLES CLICK TO SUBMIT UPDATED PROFILE INFO, PUTS TO DATABASE

  const submitUpdatedProfileInfo = (event)=>{
    event.preventDefault();
    axiosWithAuth()
    .put(`https://plants-serv.herokuapp.com/api/users/${params.id}`, updateProfileFormValues)
    .then((res)=>{
      console.log("SUCCEEDED UPDATING PROFILE INFO", res)
      setAccount(res.data);
    })
    .catch((err)=>{
      console.log("FAILED UPDATING PROFILE INFO", err)
    })

  }

  if (!account) {
    return <h3>Loading account information...</h3>
  };
  
  return (
    <div>
      <Link to="/ManagePlants">Manage Plants</Link>
    <div className='profile container' style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'baseline'}}>
    <h3>See your profile details below</h3>

    <h4>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`${account.username}`}</h4>

    <h4>Phone Num:&nbsp;&nbsp; {`${account.phone}`}</h4>

  </div>
    <form onSubmit={submitUpdatedProfileInfo}>
      <label htmlFor="username">Edit Username:
        <input type="text" name="username" id="username" placeholder="Enter Username" value={updateProfileFormValues.username} onChange={handleUpdateProfileChange} />
      </label>
      <label htmlFor="phone">Edit Phone Number:
        <input type="phone" name="phone" id="phone" placeholder="Enter Phone Number" value={updateProfileFormValues.phone} onChange={handleUpdateProfileChange} />
      </label>
      <button>Submit Updates</button>
    </form>
  </div>

  );
};
