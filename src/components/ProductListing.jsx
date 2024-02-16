import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        // console.log(products);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <span>All Products Listing 🔥</span>
      <div className="product-grid">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />;
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to={"/products"}>
        <button style={{ width: "100%", padding: 10, cursor: "pointer" }}>
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default ProductListing;
