import React, { useReducer } from "react";
import AppReducer from "./reducer";
import { AppContext } from ".";
import { CHANGE_LANGUAJE, LANGUAJE_ENGLISH } from "./types";

const AppState = (props) => {
  const initialState = {
    languaje: LANGUAJE_ENGLISH,
  };

  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: CHANGE_LANGUAJE,
      payload: languaje,
    });
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
