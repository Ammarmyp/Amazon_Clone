import ProductCard from "./ProductCard";
import "../styles/productGrid.css";
import useProducts from "../hooks/useProducts";

const ProductGrid = () => {
  const { products, error } = useProducts();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="productGrid">
        {products.map(
          (product, index) =>
            // since the products above id 56 have no value
            // this can be removed as required
            product.id < 56 && <ProductCard product={product} key={index} />
        )}
      </div>
    </>
  );
};

export default ProductGrid;
