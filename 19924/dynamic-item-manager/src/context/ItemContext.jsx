import React, { createContext, useReducer, useContext, useEffect } from "react";
import { initialState, itemReducer } from "../reducers/ItemReducer";

const ItemContext = createContext();


export const useItems = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items")) || [];
    savedItems.forEach((item) => dispatch({ type: "ADD_ITEM", payload: item }));
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};
