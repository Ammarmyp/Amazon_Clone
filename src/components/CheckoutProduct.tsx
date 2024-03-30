import { Product } from "../hooks/useProducts";
import "../styles/chekoutProduct.css";

interface Props {
  basketItem: Product;
} 

const CheckoutProduct = ({ basketItem }: Props) => {
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
        <button> Remove </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
