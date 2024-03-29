import { Dispatch } from "react";
import { Product } from "../hooks/useProducts";
import { ProductAction } from "../reducer/basketReducer";
import React from "react";

interface BasketContextType {
    basketProducts: Product[];
    dispatch: Dispatch<ProductAction>;
}

const BasketContex = React.createContext<BasketContextType>( {} as BasketContextType);

export default BasketContex;