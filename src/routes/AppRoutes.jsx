import React from "react";
import { Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Tshirts from "../pages/Tshirts";
import Bottoms from "../pages/Bottom";
import ProductDetail from "../pages/ProductDetail"; // Naya page import karein
import { useAuth } from "../context/AuthContext";

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        path="/auth"
        element={currentUser ? <Navigate to="/" replace /> : <Auth />}
      />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/bottoms" element={<Bottoms />} />
        {/* Naya Detail Route */}
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;