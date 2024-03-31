import { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import BasketContex from "../contexts/basketContext";
import "../styles/subtotal.css";
import Button from "./Button";

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
      <Button type="button" label="Proced to Chekout" width="100%" />
    </div>
  );
};

export default Subtotal;
