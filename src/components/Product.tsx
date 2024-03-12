import "../styles/product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>🌟</p>
        </div>
        <div>
          <img
            src={
              "https://m.media-amazon.com/images/I/41WY1ERM0+L._AC_SR400,600_.jpg"
            }
          />
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
