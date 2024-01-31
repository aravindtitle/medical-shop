import React from "react";
import MedicineForm from "./Components/Medicine/MedicineForm";
import Cart from "./Components/Cart/Cart";
import MedicineList from "./Components/Medicine/MedicineList";
import { MedicineProvider } from "./Components/store/MedicineContext";

const App = () => {
  return (
    <MedicineProvider>
      <div>
        <h1>Medical Shop</h1>
        <MedicineForm />
        <MedicineList />
        <Cart />
      </div>
    </MedicineProvider>
  );
};

export default App;
