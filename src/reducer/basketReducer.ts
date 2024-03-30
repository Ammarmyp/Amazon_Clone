import { Product } from "../hooks/useProducts";

interface AddToBasket {
    type: "ADD_TO_BASKET";
    product: Product;
}

interface RemoveFromBasket {
    type: "REMOVE_FROM_BASKET";
    productId: number;
}


export type ProductAction = AddToBasket | RemoveFromBasket;

const basketReducer = (products:Product[] , action: ProductAction): Product[] => {
//    console.log(products)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return [...products, action.product];
        case 'REMOVE_FROM_BASKET':
            const index = products.findIndex((products) => products.id === action.productId);
            const newBasket = [...products];

            //remove the instance of selected item
            index >=0 ? newBasket.splice(index, 1): console.warn(`Can't remove product (id: ${action.productId}) as its not in the basket!`)

            return newBasket
        default:
            return products;
    }

};

export default basketReducer;