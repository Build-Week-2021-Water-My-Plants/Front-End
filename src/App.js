//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
//STYLING IMPORTS
import "./styling/index.css";

function App() {
  return (
   <div className="frontPageCatchAllDiv">
     <Link to="/">Home</Link>
     <h1>Water My Plants</h1>
     <h3>Keeping Your Plants Alive & Your Life Oxygenated</h3>
   </div>
  );
}

export default App;
