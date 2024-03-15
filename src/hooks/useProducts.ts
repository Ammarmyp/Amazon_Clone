import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Product {
    id: number;
    title: string;
    price: number;
    desrcription: string;
    image: string;
    rating: {
      rate: number
    };
  }

const useProducts =() => {
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

  return {products, error}
}

export default useProducts;