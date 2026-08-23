import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

const MainLayout = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {/* Navbar sirf tabhi dikhega jab user login hoga */}
      {currentUser && <Navbar />}
      <AppRoutes />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <MainLayout />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
