import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Store from "../pages/Store";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
