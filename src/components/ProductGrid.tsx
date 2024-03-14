import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Product from "./Product";
import "../styles/productGrid.css";

interface Product {
  id: number;
  title: string;
  price: number;
  desrcription: string;
  image: string;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Product[]>("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  });

  return (
    <div className="productGrid">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
