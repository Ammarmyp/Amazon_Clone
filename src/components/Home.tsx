import "../styles/home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_banner_image"
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt="banner Image"
        />
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;