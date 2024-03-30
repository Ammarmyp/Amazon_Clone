import { useContext } from "react";
import { Product } from "../hooks/useProducts";
import "../styles/chekoutProduct.css";
import BasketContex from "../contexts/basketContext";

interface Props {
  basketItem: Product;
}

const CheckoutProduct = ({ basketItem }: Props) => {
  const { dispatch } = useContext(BasketContex);

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_Image" src={basketItem.image} />

      <div className="checkout_Info">
        <p className="title">{basketItem.title}</p>
        <p className="price">{basketItem.price}</p>
        <div className="rating">
          {Array.from({ length: basketItem.rating.rate }, (_, i) => (
            <p key={i}>🌟</p>
          ))}
        </div>
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_BASKET", productId: basketItem.id })
          }
        >
          {" "}
          Remove{" "}
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
