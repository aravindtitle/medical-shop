// MedicineList.js
import React, { useContext, useState } from "react";
import { useMedicineContext } from "../store/MedicineContext";

const MedicineList = () => {
  const { medicinesList, addToCart } = useMedicineContext();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (name, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Medicines List:</h2>
      {medicinesList.map((med, index) => (
        <div key={index}>
          <p>Name: {med.name}</p>
          <p>Description: {med.description}</p>
          <p>Price: {med.price}</p>
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantities[med.name] || 1}
            onChange={(e) =>
              handleQuantityChange(med.name, parseInt(e.target.value, 10))
            }
          />
          <button
            onClick={() =>
              addToCart({ ...med, quantity: quantities[med.name] || 1 })
            }
          >
            Add to Cart
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
