import { useContext } from "react";
import "../styles/product.css";
import BasketContex from "../contexts/basketContext";
import { Product } from "../hooks/useProducts";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { dispatch } = useContext(BasketContex);

  return (
    <div className="product">
      <div className="product_info">
        <p>{product.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        {/* <div className="product_rating">
          {((rating ?? 0) > 0 ? Array(rating).fill(<p>🌟</p>) : []).map((star, i) => (
            <p key={i}>{star} </p>
          ))}
        </div> */}
        <div className="product_rating">
          {/*  //the second argument here is a mapping function
          //mapping eachl element of the array to a star. */}
          {Array.from({ length: product.rating.rate }, (_, i) => (
            <p key={i}>🌟</p>
          ))}
        </div>

        <div>
          <img src={product.image} />
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: "ADD_TO_BASKET", product: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
