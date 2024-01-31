import React from "react";
import { useMedicineContext } from "../store/MedicineContext";

const Cart = () => {
  const { cart, clearCart, generateBill } = useMedicineContext();

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <h2>Cart:</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <hr />
        </div>
      ))}
      {cart.length > 0 && (
        <div>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={generateBill}>Generate Bill</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
