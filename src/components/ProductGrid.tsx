import Product from "./Product";
import "../styles/productGrid.css";
import useProducts from "../hooks/useProducts";

const ProductGrid = () => {
  const { products, error } = useProducts();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="productGrid">
        {products.map(
          (product) =>
            // since the products above id 56 have no value
            // this can be removed as required
            product.id < 56 && (
              <Product
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating.rate}
              />
            )
        )}
      </div>
    </>
  );
};

export default ProductGrid;
