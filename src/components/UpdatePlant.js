//TECH IMPORTS
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
//COMPONENT IMPORTS
import {
  fetchPlants,
  addPlant,
  updatePlant,
  deletePlant
} from "../store/actions";
//STYLING IMPORTS 
import "../styling/index.css";

const UpdatePlant = (props) => {
  //SLICES OF STATE / HOOKS

  const params = useParams();
  const history = useHistory();

  const [updatePlantFormValues, setUpdatePlantFormValues] = useState({
    id: "",
    nickname: "",
    species: "",
    h2oFrequency: "",
    image: ""
  });

  //LOADS UP PLANT TO BE EDITED/UPDATED UPON COMPONENT MOUNT

  useEffect(() => {
    const plantToEdit = props.plants.filter((plt) => {
      return plt.id == params.id;
    });
    setUpdatePlantFormValues({
      id: plantToEdit[0].id,
      nickname: plantToEdit[0].nickname,
      species: plantToEdit[0].species,
      h2oFrequency: plantToEdit[0].h2oFrequency,
      image: plantToEdit[0].image
    });
  }, []);

  //HANDLES CHANGES ON INPUTS FOR UPDATING/EDITING PLANT

  const handleUpdatePlantChange = (event) => {
    const { name, value, type, checked } = event.target;

    const valueToUse = type === "checkbox" ? checked : value;

    setUpdatePlantFormValues({
      ...updatePlantFormValues,
      [name]: valueToUse
    });
  };

  //HANDLES SUBMIT OF INPUTS FOR UPDATING/EDITING PLANT

  const handleUpdatePlantSubmit = (event) => {
    event.preventDefault();
    props.updatePlant(updatePlantFormValues);
    history.push("/ManagePlants");
  };

  //BEGIN CLASS COMPONENT RETURN

  return (
    <div className="UpdatePlantMainDiv">
      <Link to="/ManagePlants">Manage Plants</Link>
      <Link to="/Profile/:id">Profile</Link>
      <form className="UpdatePlantForm" onSubmit={handleUpdatePlantSubmit}>
        <label htmlFor="nickname">
          Enter A Plant Nickname:
          <input
            type="text"
            name="nickname"
            id="nickname"
            value={updatePlantFormValues.nickname}
            placeholder="Nickname"
            onChange={handleUpdatePlantChange}
          />
        </label>

        <label htmlFor="species">
          What Species Is This Plant:
          <input
            type="text"
            name="species"
            id="species"
            value={updatePlantFormValues.species}
            placeholder="Species"
            onChange={handleUpdatePlantChange}
          />
        </label>

        <label htmlFor="h2oFrequency">
          Watering Frequency:
          <input
            type="text"
            name="h2oFrequency"
            id="h2oFrequency"
            value={updatePlantFormValues.h2oFrequency}
            placeholder="Watering Frequency"
            onChange={handleUpdatePlantChange}
          />
        </label>

        <label htmlFor="image">
          Enter An Image URL:
          <input
            type="text"
            name="image"
            id="image"
            value={updatePlantFormValues.image}
            placeholder="Image URL"
            onChange={handleUpdatePlantChange}
          />
        </label>
        <button className="submitNewPlantButton">Submit New Plant</button>
      </form>
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
})(UpdatePlant);
