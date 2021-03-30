import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/styling/index.css';

export default function App() {
  
    return (
      <div className='profile container' style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'baseline'}}>
        <h3>See your profile details below</h3>

        <h4>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Placeholder Username</h4>

        <h4>Phone Num:&nbsp;&nbsp; Placeholder Phone</h4>
      </div>
    );
  };
