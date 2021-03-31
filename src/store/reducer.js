import React from "react";
import {
  FETCH_PLANTS_START,
  FETCH_PLANTS_SUCCESS,
  FETCH_PLANTS_FAILURE,
  ADD_PLANT,
  UPDATE_PLANT,
  DELETE_PLANT
} from "./actions";

const initialState = {
  plants: [],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANTS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_PLANTS_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_PLANTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload],
        isLoading: false,
        error: ""
      };
    case UPDATE_PLANT:
      return {
        ...state,
        plants: state.plants.map((plant) => {
          return plant.id === action.payload.id ? action.payload : plant;
        }),
        isLoading: false,
        error: ""
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter((plant) => {
          return plant.id !== action.payload.id;
        }),
        isLoading: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
