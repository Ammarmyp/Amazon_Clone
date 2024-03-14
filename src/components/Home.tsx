import { useEffect, useState } from "react";
import "../styles/home.css";
import ProductGrid from "./ProductGrid";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_banner_image"
          src="https://images.expertreviews.co.uk/wp-content/uploads/2023/03/best_samsung_phone_uk_2023_smartphones.jpg"
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
