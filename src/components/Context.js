import React, { useState, useEffect, useReducer, useContext } from "react";
// import axios from "axios";

import Reducer from "./Reducer";

const AppContext = React.createContext();
const initialState = {
  loading: true,
  firstName: "Johirul Islam",
  lastName: "Rasel",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [test, setTest] = useState("Context Text");
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <AppContext.Provider
      value={{
        ...state,
        test,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider }; //so i would normally use this line in the future child but becouse i am returning right now i would use ---useglobalContext-- hook ine next pages.
