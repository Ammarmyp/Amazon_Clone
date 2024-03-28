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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYvplECy3gYCCNe11sBYPKSRfY1fuYpu8JQ&usqp=CAU"
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
