import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT } from "../types";

const AlertState = props => {
  const initialState = {
    alert: null
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const handleAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const setAlert = data => dispatch({ type: SET_ALERT, payload: data });

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        handleAlert
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
