import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false },
];

function ProductList({ category, onAddToCart }) {
  const visible =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div>
      <h2>Available Products</h2>
      {visible.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
