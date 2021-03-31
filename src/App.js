//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
//STYLING IMPORTS
import "./styling/index.css";
//COMPONENTS IMPORTS
import ManagePlants from "./components/ManagePlants";
import UpdatePlant from "./components/UpdatePlant";
import Login from './components/Login';
import CreateAccount from "./components/CreateAccount";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="frontPageCatchAllDiv">
    <nav className="frontPageNav">
      <Link to="/">Home</Link>
      <Link to="/CreateAccount">Create an Account</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/ManagePlants">Manage Plants</Link>
    </nav>
    <h1>Water My Plants</h1>
    <h3>Keeping Your Plants Alive & Your Life Oxygenated</h3>

     <Switch>
     <Route path="/ManagePlants">
          <ManagePlants />
        </Route>
        <Route path="/UpdatePlant/:id">
          <UpdatePlant />
        </Route>
        <Route path={'/CreateAccount'} component={CreateAccount}></Route>
        <Route path={'/Profile'} component={Profile}></Route>
        <Route path={'/Login'}>
          <Login />
        </Route>
        <Route path={'/'}></Route>
      </Switch>


   </div>
  );
}

export default App;
