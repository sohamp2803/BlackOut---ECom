import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  // Agar user logged in nahi hai to login/auth page par bhej dega
  if (!currentUser) {
    return <Navigate to="/auth" replace />;
  }

  // Agar logged in hai to website ke pages render karega
  return <Outlet />;
};

export default ProtectedRoute;
