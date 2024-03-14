import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Product from "./Product";
import "../styles/productGrid.css";
import { CanceledError } from "axios";

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
    const controller = new AbortController();
    apiClient
      .get<Product[]>("/products", { signal: controller.signal })
      .then((res) => setProducts(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
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
    </>
  );
};

export default ProductGrid;
