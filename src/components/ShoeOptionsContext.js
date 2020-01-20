import React, { createContext, useReducer, useEffect } from "react";
import ShoeOptionsReducer from "./ShoeOptionsReducer";
import DefInventory from "./data/DefInventory";

export const ShoeOptionsContext = createContext();

export default function ShoeOptionsContextProvider(props) {
  //Initialize State
  const [{ options }, dispatch] = useReducer(ShoeOptionsReducer, DefInventory);

  return (
    <ShoeOptionsContext.Provider value={{ options, dispatch }}>
      {props.children}
    </ShoeOptionsContext.Provider>
  );
}
