import React, { useState } from "react";
import { useMedicineContext } from "../store/MedicineContext";

const MedicineForm = () => {
  const { addMedicine } = useMedicineContext();
  const [medicine, setMedicine] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine({ ...medicine, quantity: 1 });
    setMedicine({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={medicine.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={medicine.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={medicine.price}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Add Medicine</button>
    </form>
  );
};

export default MedicineForm;
