import React, { createContext, useReducer } from "react";

const Context = createContext();

const initialData = null;


const userReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload }
    case 'LOGOUT':
      return null 
      default:
    
      return state;
  }
}

const Provider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialData);


  const updateUser = (data) => {
    dispatch({ type: 'UPDATE' })
  };
  const logout = (data) => {
    dispatch({ type: 'LOGOUT' })
  };

  return (
    <Context.Provider value={{data: userState, updateUser,logout }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
