import React, { ReactNode, useReducer } from "react";
import basketReducer from "../reducer/basketReducer";
import BasketContex from "../contexts/basketContext";

interface Props {
  children: ReactNode;
}

const BasketProvider = ({ children }: Props) => {
  const [products, dispatch] = useReducer(basketReducer, []);

  return (
    <BasketContex.Provider value={{ products, dispatch }}>
      {children}
    </BasketContex.Provider>
  );
};

export default BasketProvider;
