//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
//STYLING IMPORTS
import "./styling/index.css";

//COMPONENTS IMPORTS
import Login from './Login'


function App() {
  return (
   <div className="frontPageCatchAllDiv">
     <h1>Water My Plants</h1>
     <nav>
        <Link to="/">Home</Link>
        <Link to="/CreateAccount">Create an Account</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
     <h3>Keeping Your Plants Alive & Your Life Oxygenated</h3>

     <Switch>
        <Route path={'/CreateAccount'}></Route>
        <Route path={'/Profile'}></Route>
        <Route path={'/Login'}>
          <Login />
        </Route>
        <Route path={'/'}></Route>
      </Switch>


   </div>
  );
}

export default App;
