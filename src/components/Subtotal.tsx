import CurrencyFormat from "react-currency-format";
import "../styles/subtotal.css";
import { useContext } from "react";
import BasketContex from "../contexts/basketContext";

const Subtotal = () => {
  const { basketProducts } = useContext(BasketContex);

  /* total price of the basket */
  const basketTotalPrice = basketProducts.reduce(
    (acc, basketProducts) => basketProducts.price + acc,
    0
  );

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal ({basketProducts.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
