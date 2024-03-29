import { ReactNode, useReducer } from "react";
import BasketContex from "../contexts/basketContext";
import basketReducer from "../reducer/basketReducer";

interface Props {
  children: ReactNode;
}

const BasketProvider = ({ children }: Props) => {
  const [basketProducts, dispatch] = useReducer(basketReducer, []);

  return (
    <BasketContex.Provider value={{ basketProducts, dispatch }}>
      {children}
    </BasketContex.Provider>
  );
};

export default BasketProvider;
