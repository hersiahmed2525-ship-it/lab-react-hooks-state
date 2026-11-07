import React from "react";

function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item} is in your cart.</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
