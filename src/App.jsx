import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </CartProvider>
  );
};

export default App;
