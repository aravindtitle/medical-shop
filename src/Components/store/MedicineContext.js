// MedicineContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  console.log("MedicineProvider: Component Mounting");

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Stored Cart from Local Storage:", storedCart);

  const [medicinesList, setMedicinesList] = useState([]);
  const [cart, setCart] = useState(storedCart);

  const addMedicine = (medicine) => {
    setMedicinesList((prevList) => [...prevList, medicine]);
  };

  const addToCart = (selectedMedicine) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.name === selectedMedicine.name
    );

    if (existingItemIndex !== -1) {
      // Update the quantity of the existing item
      const updatedCart = cart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + selectedMedicine.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add a new item to the cart
      setCart((prevCart) => [...prevCart, selectedMedicine]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const generateBill = () => {
    console.log("Before generating bill...");
    console.log("Generating Bill...");
    alert("Bill generated!");
  };

  useEffect(() => {
    // Update local storage whenever the cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log("MedicineProvider: Rendering");

  const contextValue = {
    medicinesList,
    cart,
    addMedicine,
    addToCart,
    clearCart,
    generateBill,
  };

  return (
    <MedicineContext.Provider value={contextValue}>
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicineContext = () => {
  return useContext(MedicineContext);
};
