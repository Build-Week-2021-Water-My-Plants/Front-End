//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
//STYLING IMPORTS
import "../styling/index.css";
//COMPONENT IMPORTS
import axiosWithAuth from "./axiosWithAuth";
import {
  fetchPlants,
  addPlant,
  updatePlant,
  deletePlant
} from "../store/actions";

//BEGIN FUNCTIONAL COMPONENT
const ManagePlants = (props) => {
  //SLICES OF STATE, HOOKS

  const history = useHistory();

  const [addPlantFormValues, setAddPlantFormValues] = useState({
    id: "",
    nickname: "",
    species: "",
    h2oFrequency: "",
    image: ""
  });

  //EVENT HANDLERS

  //HANDLES CHANGES ON INPUTS FOR ADDING PLANT

  const handleAddPlantChange = (event) => {
    const { name, value, type, checked } = event.target;

    const valueToUse = type === "checkbox" ? checked : value;

    setAddPlantFormValues({
      ...addPlantFormValues,
      [name]: valueToUse
    });
  };

  //HANDLES SUBMISSION OF ADD PLANT INPUTS / VALUES

  const handleAddPlantSubmit = (event) => {
    event.preventDefault();
    props.addPlant({ ...addPlantFormValues, id: Date.now() });
    setAddPlantFormValues({
      id: "",
      nickname: "",
      species: "",
      h2oFrequency: "",
      image: ""
    });
  };

  //HANDLES CLICK TO UPDATE INDIVIDUAL PLANT
  const updateButtonClick = (plantToUpdate) => {
    history.push(`/UpdatePlant/${plantToUpdate.id}`);
    //moved to UpdatePlant comp - props.updatePlant(plantToUpdate);
  };

  //HANDLES CLICK TO DELETE INDIVIDUAL PLANT
  const deleteButtonClick = (plantToDelete) => {
    props.deletePlant(plantToDelete);
  };

  //BEGIN FUNCTIONAL COMPONENT RETURN
  return (
    <div className="ManagePlantsMainDiv">
      <Link to="/Profile/:id">Profile</Link>
      <h2>My Plants</h2>
      {props.plants.map((plt) => {
        return (
          <div key={plt.id} className="individualPlant">
            <p>{plt.nickname}</p>
            <p>{plt.species} Species</p>
            <p>Water {plt.h2oFrequency}</p>
            <img src={plt.image} alt="what this plant looks like" />
            <button
              className="updatePlantButton"
              onClick={() => updateButtonClick(plt)}
            >
              Update
            </button>
            <button
              className="deletePlantButton"
              onClick={() => deleteButtonClick(plt)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <h2>Add A New Plant</h2>
      <div className="addPlantForm">
        <form className='plant-form' onSubmit={handleAddPlantSubmit}>
          <label htmlFor="nickname">
            Enter A Plant Nickname:
            <input
              type="text"
              name="nickname"
              id="nickname"
              value={addPlantFormValues.nickname}
              placeholder="Nickname"
              onChange={handleAddPlantChange}
            />
          </label>

          <label htmlFor="species">
            What Species Is This Plant:
            <input
              type="text"
              name="species"
              id="species"
              value={addPlantFormValues.species}
              placeholder="Species"
              onChange={handleAddPlantChange}
            />
          </label>

          <label htmlFor="h2oFrequency">
            Watering Frequency:
            <input
              type="text"
              name="h2oFrequency"
              id="h2oFrequency"
              value={addPlantFormValues.h2oFrequency}
              placeholder="Watering Frequency"
              onChange={handleAddPlantChange}
            />
          </label>

          <label htmlFor="image">
            Enter An Image URL:
            <input
              type="text"
              name="image"
              id="image"
              value={addPlantFormValues.image}
              placeholder="Image URL"
              onChange={handleAddPlantChange}
            />
          </label>
          <button className="submitNewPlantButton">Submit New Plant</button>
        </form>
      </div>
    </div>
  );
};

//REDUX LOGIC

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  fetchPlants,
  addPlant,
  updatePlant,
  deletePlant
})(ManagePlants);
