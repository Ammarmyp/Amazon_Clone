import "../styles/product.css";

interface Props {
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product = ({ title, image, price, rating }: Props) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className="product_rating">
          {((rating ?? 0) > 0 ? Array(rating).fill(<p>🌟</p>) : []).map((star, i) => (
            <p key={i}>{star} </p>
          ))}
        </div> */}
        <div className="product_rating">
          {/*  //the second argument here is a mapping function
          //mapping eachl element of the array to a star. */}
          {Array.from({ length: rating ?? 0 }, (_, i) => (
            <p key={i}>🌟</p>
          ))}
        </div>

        <div>
          <img src={image} />
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
