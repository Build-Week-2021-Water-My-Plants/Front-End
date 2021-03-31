import axios from "axios";
import axiosWithAuth from "../components/axiosWithAuth";

export const FETCH_PLANTS_START = "FETCH_PLANTS_START";
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS";
export const FETCH_PLANTS_FAILURE = "FETCH_PLANTS_FAILURE";
export const ADD_PLANT = "ADD_PLANT";
export const UPDATE_PLANT = "UPDATE_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";

export const fetchPlants = () => (dispatch) => {
  dispatch({ type: FETCH_PLANTS_START });
  axiosWithAuth()
    .get("https://plants-serv.herokuapp.com/api/plants/")
    .then((res) => {
      console.log("SUCCEEDED FETCHING PLANTS", res);
      dispatch({ type: FETCH_PLANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("FAILED TO FETCH PLANTS", err);
      dispatch({ type: FETCH_PLANTS_FAILURE, payload: err.message });
    });
};

export const addPlant = (plantToAdd) => {
  return { type: ADD_PLANT, payload: plantToAdd };
};

export const updatePlant = (updatedPlant) => {
  return { type: UPDATE_PLANT, payload: updatedPlant };
};

export const deletePlant = (plantToDelete) => {
  return { type: DELETE_PLANT, payload: plantToDelete };
};
