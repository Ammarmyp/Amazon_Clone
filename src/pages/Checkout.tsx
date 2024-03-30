import { useContext } from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";
import BasketContex from "../contexts/basketContext";
import "../styles/chekout.css";

const Checkout = () => {
  const { basketProducts } = useContext(BasketContex);
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            className="checkout_ad"
          />
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basketProducts.map((Item) => (
              <CheckoutProduct key={Item.id} basketItem={Item} />
            ))}
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
