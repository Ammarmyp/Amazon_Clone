import useProducts from "../hooks/useProducts";
import "../styles/home.css";
import ProductGrid from "./ProductGrid";

const Home = () => {
  const { products } = useProducts();

  const bannerImage = products[Math.floor(Math.random() * products.length)];
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_banner_image"
          src={
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="banner Image"
        />
        <div className="home_row">
          <ProductGrid />

          {/* <Product /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
