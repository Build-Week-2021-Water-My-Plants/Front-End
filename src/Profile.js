import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/styling/index.css';

const initialAccount = { username: 'JohnDoe123', phone: '3051234567', id: 0.1111111111111111 };

export default function App() {
  const [ account, setAccount ] = useState(initialAccount);

  useEffect(() => {
    console.log(account, "This object represents the account currently set in state");
  }, [account]);

  if (!account) {
    return <h3>Loading account information...</h3>
  }
  
  return (
    <div className='profile container' style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'baseline'}}>
    <h3>See your profile details below</h3>

    <h4>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`${account.username}`}</h4>

    <h4>Phone Num:&nbsp;&nbsp; {`${account.phone}`}</h4>
  </div>
  );
};
