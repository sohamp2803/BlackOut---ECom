import React from "react";
import { Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Tshirts from "../pages/Tshirts";
import Bottoms from "../pages/Bottom";
import { useAuth } from "../context/AuthContext";

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {/* Agar already logged in hai aur /auth khole to direct Home par bheje */}
      <Route
        path="/auth"
        element={currentUser ? <Navigate to="/" replace /> : <Auth />}
      />

      {/* Yeh saare routes protected hain (Authentication ke baad hi khulenge) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/bottoms" element={<Bottoms />} />
      </Route>

      {/* Unknown path par redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;