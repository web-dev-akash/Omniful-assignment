import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
