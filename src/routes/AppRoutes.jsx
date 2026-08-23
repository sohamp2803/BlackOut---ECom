import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Tshirts from "../pages/Tshirts";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tshirts" element={<Tshirts />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
