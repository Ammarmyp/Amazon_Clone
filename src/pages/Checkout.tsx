import Header from "../components/Header";
import Subtotal from "../components/Subtotal";
import "../styles/chekout.css";

const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            className="checkout_ad"
          />
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal/>
        </div>
      </div>
    </>
  );
};

export default Checkout;
