import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/styling/index.css';

// this is just dummy information to ensure that the UI is displaying correctly; once data is actually being retrieved from the API, then this can be changed to an empty object
const initialAccount = { username: 'JohnDoe123', phone: '3051234567', id: 0.1111111111111111 };

export default function App() {
  const [ account, setAccount ] = useState(initialAccount);

  // this useEffect logs the 'account' object state everytime it is updated
  useEffect(() => {
    console.log(account, "This object represents the account currently set in state");
  }, [account]);

  // upon loading this component, the below useEffect will run, access the API, and then get the user's account data, which should be an object containing { username, password, phone, id }; this account data is then set to the 'account' object state
  useEffect(() => {
    const getAccountInfo = () => {
      axios
        .get("https://reqres.in/api/accounts")
        .then((res) => {
          console.log(res.data, "This log displays the data being fetched from the API");
        //   the line right below should be uncommented and should setAccount() to an object representing all the user's account data, so that the username and phone can then be accessed and rendered in the UI
        //   setAccount(res.data);
        }, [])
        .catch((err) => {
          console.log(err);
        });
    }
    getAccountInfo();
  }, []);

  if (!account) {
    return <h3>Loading account information...</h3>
  };
  
  return (
    <div className='profile container' style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'baseline'}}>
    <h3>See your profile details below</h3>

    <h4>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`${account.username}`}</h4>

    <h4>Phone Num:&nbsp;&nbsp; {`${account.phone}`}</h4>
  </div>
  );
};
