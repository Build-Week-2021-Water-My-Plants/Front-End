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

  const [uniqueId, setUniqueId] = useState("");

  return (
    <div className="frontPageCatchAllDiv">
    <nav className="frontPageNav">
      <Link to="/">Home</Link>
      <Link to="/CreateAccount">Create an Account</Link>
      <Link to="/Login">Login</Link>
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
        <Route path={'/CreateAccount'}>
          <CreateAccount uniqueId={uniqueId} setUniqueId={setUniqueId} />
        </Route>
        <Route path={'/Profile/:id'} component={Profile}></Route>
        <Route path={'/Login'}>
          <Login uniqueId={uniqueId} setUniqueId={setUniqueId} />
        </Route>
        <Route path={'/'}></Route>
      </Switch>


   </div>
  );
}

export default App;
