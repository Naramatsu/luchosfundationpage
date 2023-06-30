import React, { useReducer } from "react";
import AppReducer from "./reducer";
import { AppContext } from ".";
import { CHANGE_LANGUAJE, LANGUAJE, LANGUAJE_ENGLISH } from "./types";
import { getFromLocalStorage, saveInLocalStorage } from "../utils/localStorage";

const AppState = (props) => {
  const initialState = {
    languaje: getFromLocalStorage(LANGUAJE) || LANGUAJE_ENGLISH,
  };

  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: CHANGE_LANGUAJE,
      payload: languaje,
    });
    saveInLocalStorage(LANGUAJE, languaje);
  };

  const combineFunctions = {
    setLanguaje,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
