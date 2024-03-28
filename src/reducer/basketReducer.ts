import { Product } from "../hooks/useProducts";

interface AddToBasket {
    type: "ADD TO BASKET",
    product: Product;
}


export type ProductAction = AddToBasket;

const basketReducer = (products:Product[] , action: ProductAction): Product[] => {
//    console.log(products)
    switch(action.type){
        case 'ADD TO BASKET':
            return [...products, action.product];
        default:
            return products;
    }

};

export default basketReducer;